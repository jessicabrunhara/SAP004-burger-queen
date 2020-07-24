import React from 'react';
import './header.css'
import Logo from '../Images/logoheader.png'
import LogoPiscando from '../Images/gifheader.gif'


const Header = () => {
  return (
      <header className='header-wrapper'>
        <img src={LogoPiscando} />
      </header>

  );
}

export default Header