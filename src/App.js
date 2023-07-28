import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

import './App.css';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const location = useLocation()
   const navigate = useNavigate();
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '12345678';

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => char.id !== Number(id))
      )
   }
   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {
            location.pathname !== '/' ? (
               <Nav
                  onSearch={onSearch}
                  characters={characters}
               />
            ) : null
         }

         <Routes>
            <Route path='/' element={
               <Form
                  login={login}
               />
            } />

            <Route path='/home' element={
               <Cards
                  characters={characters}
                  onClose={onClose}
               />
            } />

            <Route path='/about' element={<About />} />

            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
