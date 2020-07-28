import React from 'react';
import Header from 'Components/header';
import { useSelector } from 'react-redux';

const FinishedOrder = () => {

  return (
    <div>
      <Header />
      <div>
        <p>Olá, pedidos finalizados.</p>
      </div>
    </div>

  )
}

export default FinishedOrder;