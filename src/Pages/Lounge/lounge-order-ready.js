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

  return (
    <div>
      <div>
        <HeaderLounge />
      </div>
      <div>
        {orderReady.map(item => <OrderReady key={item.id} time={item.time} table={item.table} client={item.client} menuItem={item.menuItem} state={item.state} idDoc={item.id} />)}
      </div>
    </div>
  )
}

export default LoungeOrderReady;