import React from 'react';
import './order-register.css'
import Button from 'Components/Button/button'
import Input from 'Components/Input/input'
import 'Components/Input/input.css'


const OrderRegister = () => {
  return (
    <div className='order-register-wrapper'>
      <h1>Resumo do Pedido</h1>
      <div className='input-wrapper'>
        <label>Nome</label>
        <Input className='input-new-order' type='text' />
      </div>
      <div className='input-wrapper'>
        <label>Mesa</label>
        <Input className='input-new-order' type='text' />
      </div>
      <div className='box'>
      </div>
    </div >

  )
}
export default OrderRegister;