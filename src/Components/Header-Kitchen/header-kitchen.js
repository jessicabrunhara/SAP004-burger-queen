import React from 'react';
import './header-kitchen.css';
import LogoPiscando from 'Images/gifheader.gif';
import { Link } from 'react-router-dom';
import firebase from 'Config/firebase';
import 'firebase/auth';
import Button from 'Components/Button/button'


const HeaderKitchen = () => {

  const signOut = () => {
    if (firebase.auth().currentUser) {
      firebase.auth().signOut()
        .then(result => {
          console.log(' oi');
        }).catch(erro => {
          console.log('erro tchau');
        });
    }
  }

  return (
    <header className='header-wrapper-kitchen'>
      <figure className='logo-header-wrapper'>
        <img src={LogoPiscando} />
      </figure>
      <div className='all-btn-links'>
        <div className='btn-routes'>
          <Button className='btn-links'><Link className='link' to='/kitchen-new-order' children={'Pedidos Recebidos'} /></Button>
          <Button className='btn-links'><Link className='link' to='/finished-kitchen' children={'Pedidos Finalizados'} /></Button>
        </div>
        <div className='btn-link-out'>
          <Button className='btn-out' onClick={signOut}><Link className='link' to='/' children={'Sair'} /></Button>
        </div>
      </div>
    </header >
  );
}

export default HeaderKitchen;