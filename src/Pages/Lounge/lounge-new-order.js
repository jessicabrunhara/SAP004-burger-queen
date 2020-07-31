import React from 'react';
import Header from 'Components/Header-Lounge/header-lounge';
import Menu from 'Components/Menu/menu';
import OrderRegister from 'Components/Order-Register/order-register';
import 'Components/Order-Register/order-register.css'


const LoungeNewOrder = () => {

  return (
    <div>
      <Header />
      <div className='new-order-wrapper'>
        <Menu />
        <OrderRegister />
      </div>

    </div>
  )
}

export default LoungeNewOrder;