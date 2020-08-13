import React from 'react';
import './header-lounge.css';
import LogoPiscando from 'Images/gifheader.gif';
import { Link } from 'react-router-dom';
import firebase from 'Config/firebase';
import 'firebase/auth';


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

      <div className='logo-header-wrapper'>
        <img src={LogoPiscando} />
      </div>

      <div className='all-btn-links'>

        <div className='btn-routes'>
          <button className='btn-links'><Link className='link' to='/lounge-new-order' children={'Menu'}></Link></button>
          <button className='btn-links'><Link className='link' to='/lounge-order-ready' children={'Prontos para Entregar'}></Link></button>
          <button className='btn-links'><Link className='link' to='/finished-order-lounge' children={'Pedidos Finalizados'}></Link></button>
        </div>

        <div className='btn-link-out'>
          <button className='btn-out' onClick={signOut}><Link className='link' to='/'>Sair</Link></button>
        </div>

      </div>

    </header >
  );
}

export default HeaderLounge;