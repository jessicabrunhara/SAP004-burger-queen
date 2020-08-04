import React from 'react';
import HeaderLounge from 'Components/Header-Lounge/header-lounge';
import OrderReady from 'Components/Louge-Order-Ready/order-ready'

const LoungeOrderReady = () => {

  return (
    <div>
      <HeaderLounge />
      <div>
        <OrderReady />
      </div>
    </div>
  )
}

export default LoungeOrderReady;