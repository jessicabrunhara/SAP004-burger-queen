import React from 'react';
import Header from 'Components/header';
import { useSelector } from 'react-redux';

const KitchenOrderReady = () => {

  return (
    <div>
      <Header />
      <div>
        <p>Olá, Novos Pedidos.</p>
      </div>
    </div>
  )
}

export default KitchenOrderReady;