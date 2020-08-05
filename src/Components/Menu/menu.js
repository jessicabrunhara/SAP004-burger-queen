import React from 'react';
import './menu.css';
import '../Lounge-Order-Ready/order-ready.css'
import Button from 'Components/Button/button';
import Input from 'Components/Input/input'

const Menu = ({ items }) => {

  return (
    <div className='order-style'>
      <div className='menu-wrapper'>
        <h1>Menu</h1>
        <div className='all-menu'>

          <div className='menu-breakfast'>
            <div className='label'>Café da Manhã</div>
            <div className='btn-wrapper'>
              {items.map((item, index) => <Button className='btn-menu' type='button' key={`btn-menu-${index}`}>{item.name}</Button>)}
            </div>
          </div>

          <div className='menu-lunch'>
            <div className='label'>Almoço/Jantar</div>
            <div className='btn-wrapper'>
              <Button className='btn-menu' type='button' name='Hamburger Duplo' />
            </div>
          </div>
        </div >
      </div>
      <div className='order-table-wrapper'>
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
          <Button className='btn-std'> Enviar</Button>
        </div>
      </div>
    </div>
  )
};

export default Menu;