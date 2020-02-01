import React from 'react';
import { Link } from 'react-router-dom'
import cabane from '../img/cabane.jpg'
import '../App.css';


class Begin extends React.Component {
  constructor(props){
    super(props)
    
  }
  render (){
    return (
      <div className="begin">
        <figure className='figure-cabane'>
          <img className='img-cabane' src={cabane} alt='cabane'/>
        </figure>
        <p>
          Tu ouvres durement les yeux. Tu as froid. Tu es allongé sur le sol humide. Aucun souvenirs, qui es-tu ? Comment t'appelles-tu ? Comment es-tu arrivé là ? Une seconde.. Un prénom résonne dans ta tête.. {/*{state.name} .. */ }Ca doit être le tiens . Tu ne vois que la cime des arbres qui t'entourent. Tu te relèves, la forêt qui autour de toi est grise et très peu accueillante, ça doit être l'hiver. Devant toi, une vieille cabane faite de bois qui, visiblement, ne va pas tarder a s'écrouler. Il n'y a rien d'autre aux alentours. Tu avances doucement, entre dans la cabane. Deux portes s'offrent à toi. L'une est d'un blanc luisant et paraît très moderne, l'autre, quant à elle, est d'un bois visiblement très ancien et toutes ses parties en métal sont rouillées. Laquelle choisis-tu ?
        </p>

        <Link to="/whitedoor">Porte blanche</Link>
        <Link to="/olddoor">Porte en bois</Link>
      </div>
    );
  }
}

export default Begin;