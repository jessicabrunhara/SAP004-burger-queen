import React from 'react';
import HeaderLounge from 'Components/Header-Lounge/header-lounge';
import Menu from 'Components/Menu/menu';
import OrderRegister from 'Components/Order-Register/order-register';
import 'Components/Order-Register/order-register.css'

const LoungeNewOrder = () => {

  return (
    <div>
      <HeaderLounge />
      <div className='new-order-wrapper'>
        <Menu />
        <OrderRegister />
      </div>

    </div>
  )
}

export default LoungeNewOrder;