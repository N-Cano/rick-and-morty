import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';

function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => char.id !== Number(id))
      )
   }

   return (
      <div className='App'>
         <Nav
            onSearch={onSearch}
            characters={characters}
         />
         <Cards
            characters={characters}
            onClose={onClose}
         />
      </div>
   );
}

export default App;
