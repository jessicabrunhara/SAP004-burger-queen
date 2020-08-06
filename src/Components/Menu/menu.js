import React, { useState } from 'react';
import './menu.css';
import '../Lounge-Order-Ready/order-ready.css'
import Button from 'Components/Button/button';
import Input from 'Components/Input/input';
import MyModal from 'Components/Modal/modal';

const Menu = ({ items }) => {

  const [menuItem, setMenuItem] = useState([]);

  /* const orderTable = () => {
     setMenuItem(menuItem + 1);
   } */

  return (
    <div className='order-style'>
      <div className='menu-wrapper'>
        <h1>Menu</h1>
        <div className='all-menu'>

          <div className='menu-breakfast'>
            <div className='label'>Café da Manhã</div>
            <div className='btn-wrapper'>
              {items.filter(item => item.breakfast === true).map((product, index) => <Button onClick={() => setMenuItem([...menuItem, product])} className='btn-menu' type='button' key={`btn-menu-${index}`}>{product.name} <br></br> R$ {product.price} </Button>)}
            </div>
          </div>

          <div className='menu-lunch'>
            <div className='label'>Almoço/Jantar</div>
            <div className='btn-wrapper'>
              {items.filter(item => item.breakfast === false && item.hamburger === false).map((product, index) => <Button onClick={() => setMenuItem([...menuItem, product])} className='btn-menu' type='button' key={`btn-menu-${index}`}>{product.name} <br></br> R$ {product.price} </Button>)}

              {items.filter(item => item.breakfast === false && item.hamburger === true).map((product, index) => <MyModal className='btn-menu' type='button' key={`btn-menu-${index}`} adds={product.adds} options={product.options} >{product.name} <br></br> R$ {product.price} </MyModal>)}

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
            <div className='quantify-ordered'>{menuItem.map(product => <p>{product.name} {product.price}</p>)}</div>
            <div className='item-ordered'></div>
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