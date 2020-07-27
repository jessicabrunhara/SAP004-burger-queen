import React from 'react';
import LogoPiscando from 'Images/4.gif';
import './logo.css';


const Logo = (props) => {
  return (
    <div className={props.className}>
      <img src={LogoPiscando} />
    </div>

  );
}

export default Logo;