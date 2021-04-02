import React from 'react';
import azulBlau from '../../../assets/azul_blau.png'
import './logo.scss';

function Logo() {
    return (
        <div className='container-img'>
            <img className='container-img__img' alt='azul-blau' src={azulBlau}/>
        </div>
    )
}

export default Logo;