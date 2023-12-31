import style from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({id, name, status, species, gender, origin, image, onClose}) => {

   const aliveOrDead = () => {
      if (status === 'Alive') {
         return style.statusAlive
      } else {
         return style.statusDead
      }
   }
   return (
      <div className={style.card}>
         <button onClick={() => onClose(id)}>X</button>
         <h2 className={style.species}>{species}</h2>
         <img className={style.img} src={image} alt='' />

         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         
         <h2>{gender}</h2>
         <h2 className={aliveOrDead()}>{status}</h2>
      </div>
   );
}

export default Card;
