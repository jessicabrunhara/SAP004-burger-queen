import React, { useState, useEffect } from 'react';
import './menu.css';
import '../Lounge-Order-Ready/order-ready.css'
import Button from 'Components/Button/button';
import Input from 'Components/Input/input';
import MyModal from 'Components/Modal/modal';
import firebase from 'Config/firebase'

const Menu = ({ items }) => {

  const [menuItem, setMenuItem] = useState([]);
  const [table, setTable] = useState();
  const [client, setClient] = useState();
  // const [resume, setResume] = useState(0);

  function sendOrder(table, client) {
    const orderPromise = firebase.firestore().collection('orders').add({
      client,
      table,
      menuItem,
      state: 'preparing'
    });
    orderPromise.then(() => {
      alert('seu pedido foi enviado!')
    }).catch(() => {
      alert('deu ruim');
    })
  }

  const changeQuantity = (product, change) => {
    product.quantity += change

    if (product.quantity <= 0) {
      const i = menuItem.indexOf(product)
      menuItem.splice(i, 1)
    }

    setMenuItem([...menuItem])
  }

  const addNewItem = (product) => {
    for (let i = 0; i < menuItem.length; i++) {
      if (menuItem[i].name === product.name) {
        return
      }
    }
    product.quantity = 1
    setMenuItem([...menuItem, product])
  }


  let total = 0
  menuItem.map(product => {
    total += product.price * product.quantity
  })

  return (
    <div className='order-style'>
      <div className='menu-wrapper'>
        <div className='all-menu'>
          <div className='menu-breakfast'>
            <div className='label-menu'>Café da Manhã</div>
            <div className='btn-wrapper'>
              {items.filter(item => item.breakfast === true).map((product, index) => <Button onClick={() => addNewItem(product)} className='btn-menu' type='button' key={`btn-menu-${index}`}> {<img src={product.icon} className='icon-btn' alt='Icone do produto' />} {product.name} <br></br> R$ {product.price},00 </Button>)}
            </div>
          </div>

          <div className='menu-lunch'>
            <div className='label-menu'>Almoço / Jantar</div>
            <div className='btn-wrapper'>
              {items.filter(item => item.breakfast === false && item.hamburger === false).map((product, index) => <Button onClick={() => addNewItem(product)} className='btn-menu' type='button' key={`btn-menu-${index}`}> {<img src={product.icon} className='icon-btn' alt='Icone do produto' />} {product.name} <br></br> R$ {product.price},00 </Button>)}

              {items.filter(item => item.breakfast === false && item.hamburger === true).map((product, index) => <MyModal className='btn-menu' type='button' key={`btn-menu-${index}`} adds={product.adds} options={product.options} > {<img src={product.icon} className='icon-btn' alt='Icone do produto' />} {product.name} <br></br> R$ {product.price},00 </MyModal>)}

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
                  <Button className='btn-add' onClick={() => changeQuantity(product, 1)}><i className="fas fa-plus"></i></Button>
                  <div className='quantify-ordered'>{product.quantity}</div>
                  <Button className='btn-add' onClick={() => changeQuantity(product, -1)}><i className="fas fa-minus"></i></Button>
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
          <Button onClick={() => sendOrder(table, client)} className='btn-std'> Enviar</Button>
        </div>
      </div>
    </div >
  )
};

export default Menu;