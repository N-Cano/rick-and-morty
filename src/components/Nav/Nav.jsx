import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'

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
        </nav>
    )
}

export default Nav