import React from 'react';
import './header.css'
import LogoPiscando from 'Images/gifheader.gif'


const Header = () => {
  return (
    <header class='header-wrapper'>
      <img src={LogoPiscando} />
    </header>

  );
}

export default Header;