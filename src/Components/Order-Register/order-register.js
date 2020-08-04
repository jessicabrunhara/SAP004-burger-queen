import React from 'react';
import './order-register.css'
import Button from 'Components/Button/button'
import Input from 'Components/Input/input'
import 'Components/Input/input.css'


const OrderRegister = () => {
  return (
    <div className='order-ready-wrapper'>
      <div className='table-wrapper'>
        <Input className='input-style' placeholder='Mesa'>Mesa:</Input>
        <Input className='input-style' placeholder='Nome'>Cliente: </Input>
      </div>
      <div className='order-information-wrapper'>
        <div className='ordered-wrapper'>
          <div className='quantify-ordered'>2 x</div>
          <div className='item-ordered'>Batata Frita</div>
        </div>
        <div className='ordered-wrapper'>
          <div className='quantify-ordered'>1 x</div>
          <div className='item-ordered'>Hambúrger Duplo</div>
        </div>
      </div>
      <div className='value-wrapper'>
        <div className='total-value'>Total</div>
        <div className='total-value'>R$5,00</div>
      </div>
      <div className='btn-wrapper'>
        <Button className='btn-std' name='Enviar' />
      </div>
    </div>
  )
}
export default OrderRegister;