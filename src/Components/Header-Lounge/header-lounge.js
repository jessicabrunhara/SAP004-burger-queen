import React from 'react';
import './header-lounge.css'
import LogoPiscando from 'Images/gifheader.gif'


const Header = () => {
  return (
    <header className='header-wrapper'>
      <img src={LogoPiscando} />
    </header>

  );
}

export default Header;