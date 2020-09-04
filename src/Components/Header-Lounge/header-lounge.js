import React from 'react';
import './header-lounge.css';
import LogoPiscando from 'Images/gifheader.gif';
import { Link } from 'react-router-dom';
import firebase from 'Config/firebase';
import 'firebase/auth';
import Button from 'Components/Button/button'


const HeaderLounge = () => {

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
    <header className='header-wrapper-lounge'>
      <figure className='logo-header-wrapper'>
        <img src={LogoPiscando} />
      </figure>
      <div className='all-btn-links'>
        <div className='btn-routes'>
          <Button className='btn-links'><Link className='link' to='/lounge-new-order' children={'Novo Pedido'} /></Button>
          <Button className='btn-links'><Link className='link' to='/lounge-order-ready' children={'Pedidos Prontos'} /></Button>
          <Button className='btn-links'><Link className='link' to='/finished-lounge' children={'Pedidos Entregues'} /></Button>
        </div>
        <div className='btn-link-out'>
          <Button className='btn-out' onClick={signOut}><Link className='link' to='/' children={'Sair'} /></Button>
        </div>
      </div>
    </header >
  );
}

export default HeaderLounge;