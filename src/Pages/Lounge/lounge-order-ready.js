import React, { useState, useEffect } from 'react';
import HeaderLounge from 'Components/Header-Lounge/header-lounge';
import OrderReady from 'Components/Lounge/order-ready'
import firebase from 'Config/firebase';
import './lounge.css';

const LoungeOrderReady = () => {

  const [orderReady, setOrderReady] = useState([]);

  useEffect(() => {
    firebase.firestore()
      .collection('orders')
      .orderBy('time', 'asc')
      .where('state', '==', 'Pedido Pronto')
      .get()
      .then((result) => {
        const arrayOrderReady = [];
        result.docs.forEach(doc => {
          arrayOrderReady.push({
            id: doc.id,
            ...doc.data()
          })
        })
        setOrderReady(arrayOrderReady)
      })
  }, []);
  console.log(orderReady);

  function removeOrder(id) {
    setOrderReady(orderReady.filter(item => item.id !== id))
  }

  return (
    <div>
      <div>
        <HeaderLounge />
      </div>
      <div className='order-list'>
        {orderReady.map(item => <OrderReady key={item.id} time={item.time} table={item.table} client={item.client} menuItem={item.menuItem} state={item.state} idDoc={item.id} waiterName={item.waiterName} removeOrder={removeOrder} />)}
      </div>
    </div>
  )
}

export default LoungeOrderReady; 