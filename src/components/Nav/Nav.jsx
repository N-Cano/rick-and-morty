import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'
import { Link } from 'react-router-dom';

const Nav = ({onSearch, characters}) => {

    const generateRandomCharacter = () => {
      let randomID = Math.floor(Math.random() * 826) + 1;
      const characterExists = characters.some(
         (character) => character.id === randomID
      );

      if (characterExists) {
         return generateRandomCharacter();
      }

      return randomID;
   };

   const randomize = () => {
      let randomID = generateRandomCharacter();
      onSearch(randomID);
   };

    return (
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch} />

            <button onClick={randomize}>Random</button>

            <Link to='/about'>
               <button>About</button>
            </Link>

            <Link to='/home'>
               <button>Home</button>
            </Link>
        </nav>
    )
}

export default Nav