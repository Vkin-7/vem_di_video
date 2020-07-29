import React from 'react';

import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
//import ButtonLink from '../ButtonLink';

import './style.css';

const Menu = () => {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='Vem Di Video Logo'/>
            </a>

            <Button as='a' className='ButtonLink' href='/'>
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;