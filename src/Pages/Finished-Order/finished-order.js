import React from 'react';
import Header from 'Components/header';
import Navbar from 'Components/Navbar/index';
import { useSelector } from 'react-redux';

const FinishedOrder = () => {

  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <p>Olá, pedidos finalizados.</p>
        <h1>{useSelector(state => state.userEmail)}</h1>
        <h1>Logado: {useSelector(state => state.userLogged)}</h1>
      </div>
    </div>

  )
}

export default FinishedOrder;