import React from 'react';
import './header-kitchen.css';
import LogoPiscando from 'Images/gifheader.gif';
import { Link } from 'react-router-dom';
import firebase from 'Config/firebase';
import 'firebase/auth';


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

            <div className='logo-header-wrapper'>
                <img src={LogoPiscando} />
            </div>

            {/* <button className='navbar-toggler' type='button' data-target='#navbar'>
                <i className='fas fa-bars text-white'></i>
                <div className='top-menu' id='navbar'>
                    <ul className='navbar-nav mr-auto'>
                        <li><Link className='link' to='/kitchen-new-order'>Pedido Cozinha</Link></li>
                        <li><Link className='link' to='/kitchen-order-ready'>Pronto Cozinha</Link></li>
                        <li><Link className='link' to='/finished-order'>Pedido Finalizado</Link></li>
                        <li onClick={signOut}><Link className='link' to='/'>Sair</Link></li>
                    </ul>
                </div>
            </button> */}

            <div className='all-btn-links'>

                <div className='btn-routes'>
                    <button className='btn-links'><Link className='link' to='/kitchen-new-order'>Pedido Cozinha</Link></button>
                    <button className='btn-links'><Link className='link' to='/kitchen-order-ready'>Pronto Cozinha</Link></button>
                    <button className='btn-links'><Link className='link' to='/finished-order-kitchen'>Pedido Finalizado</Link></button>
                </div>

                <div className='btn-link-out'>
                    <button className='btn-out' onClick={signOut}><Link className='link' to='/'>Sair</Link></button>
                </div>

            </div>

        </header >
    );
}

export default HeaderKitchen;