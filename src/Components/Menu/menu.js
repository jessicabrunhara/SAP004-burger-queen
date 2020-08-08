import React, { useState } from 'react';
import './menu.css';
import '../Lounge-Order-Ready/order-ready.css'
import Button from 'Components/Button/button';
import Input from 'Components/Input/input';
import MyModal from 'Components/Modal/modal';

const Menu = ({ items }) => {

  const [menuItem, setMenuItem] = useState([]);
  const [table, setTable] = useState();
  const [client, setClient] = useState();
  const [resume, setResume] = useState(0);

  const changeQuantity = (product, change) => {
    product.quantity += change

    // Abaixo é importante usar "[...menuItem]" em vez de "menuItem"
    // Se for usado apenas "menuItem", o React não vai perceber que houve uma mudança no array
    // E, por isso, não vai recarregar o componente
    setMenuItem([...menuItem])
  }

  const addNewItem = (product) => {
    product.quantity = 1
    setMenuItem([...menuItem, product])
  }

  // Descubra o valor total dos itens selecionados
  let total = 0
  menuItem.map(product => {
    total += product.price * product.quantity
  })

  return (
    <div className='order-style'>
      <div className='menu-wrapper'>
        <h1>Menu</h1>
        <div className='all-menu'>

          <div className='menu-breakfast'>
            <div className='label-menu'>Café da Manhã</div>
            <div className='btn-wrapper'>
              {items.filter(item => item.breakfast === true).map((product, index) => <Button onClick={() => addNewItem(product)} className='btn-menu' type='button' key={`btn-menu-${index}`}>{product.name} <br></br> R$ {product.price} </Button>)}
            </div>
          </div>

          <div className='menu-lunch'>
            <div className='label-menu'>Almoço / Jantar</div>
            <div className='btn-wrapper'>
              {items.filter(item => item.breakfast === false && item.hamburger === false).map((product, index) => <Button onClick={() => addNewItem(product)} className='btn-menu' type='button' key={`btn-menu-${index}`}>{product.name} <br></br> R$ {product.price} </Button>)}

              {items.filter(item => item.breakfast === false && item.hamburger === true).map((product, index) => <MyModal className='btn-menu' type='button' key={`btn-menu-${index}`} adds={product.adds} options={product.options} >{product.name} <br></br> R$ {product.price} </MyModal>)}

            </div>
          </div>
        </div >
      </div>

      <div className='order-table-wrapper'>
        <div className='table-wrapper'>
          <Input onChange={(e) => setTable(e.target.value)} className='input-style' placeholder='Mesa' required >Mesa:</Input>
          <Input onChange={(e) => setClient(e.target.value)} className='input-style' placeholder='Nome' required >Cliente: </Input>
        </div>

        <div className='order-information-wrapper'>
          <div className='ordered-wrapper'>
            {menuItem.map(product =>
              <div className='item-ordered'>
                <p>{product.name}</p>
                <div className='btn-order-wrapper'>
                  <Button className='btn-add' onClick={() => changeQuantity(product, 1)}>+</Button>
                  <div className='quantify-ordered'>{product.quantity}</div>
                  <Button className='btn-add' onClick={() => changeQuantity(product, -1)}>-</Button>
                </div>
                <div className='price-ordered'>{product.quantity * product.price}</div>
              </div>
            )}
          </div>
        </div>

        <div className='value-wrapper'>
          <div className='total-value'>Total</div>
          <div className='total-value'>{total}</div>
        </div>
        <div className='btn-wrapper'>
          <Button className='btn-std'> Enviar</Button>
        </div>
      </div>
    </div >
  )
};

export default Menu;