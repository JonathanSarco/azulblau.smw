import React from 'react';
import blackAzulBlau from '../../../assets/azul_blau_black.png'
import whiteAzulBlau from '../../../assets/azul_blau_white.png'
import './logo.scss';

function Logo({ isFooter = false}) {

    // Check if I have to use the white or not
    let azulBlau = isFooter ? whiteAzulBlau : blackAzulBlau;

    return (
        <div className='container-img'>
            <img className='container-img__img' alt='azul-blau' src={azulBlau}/>
        </div>
    )
}

export default Logo;