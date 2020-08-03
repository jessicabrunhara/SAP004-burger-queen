import React from 'react';
import './header-lounge.css';
import LogoPiscando from 'Images/gifheader.gif';
import { Link } from 'react-router-dom';
import firebase from 'Config/firebase';
import 'firebase/auth';


const Header = () => {

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

      <div className='logo-wrapper'>
        <img src={LogoPiscando} />
      </div>


      <div className='all-btn-links'>

        <div className='btn-routes'>
          <button className='btn-links'><Link className='link' to='/lounge-new-order'>Novo Pedido</Link></button>
          <button className='btn-links'><Link className='link' to='/lounge-order-ready'>Pedido Pronto</Link></button>
          <button className='btn-links'><Link className='link' to='/finished-order'>Pedido Finalizado</Link></button>
        </div>

        <div className='btn-link-out'>
          <button className='btn-out' onClick={signOut}><Link className='link' to='/'>Sair</Link></button>
        </div>

      </div>

    </header >
  );
}

export default Header;