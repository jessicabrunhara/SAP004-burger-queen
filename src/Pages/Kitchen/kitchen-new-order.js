import React, { useState, useEffect } from 'react';
import HeaderKitchen from 'Components/Header-Kitchen/header-kitchen';
import OrdersReceived from 'Components/Kitchen/order-received';
import firebase from 'Config/firebase';
import '../Lounge/lounge.css'

const KitchenNewOrder = () => { 

  const [orderLounge, setOrderLounge] = useState([]);

  useEffect(() => {
    firebase.firestore()
      .collection('orders')
      .orderBy('time', 'asc')
      .where('state', '==', 'Preparando')
      .get()
      .then((result) => {
        const arrayOrder = [];
        result.docs.forEach(doc => {
          arrayOrder.push({
            id: doc.id,
            ...doc.data()
          })
        })
        setOrderLounge(arrayOrder)
      })
  }, []);

  function removeOrder(id) {
    setOrderLounge(orderLounge.filter(item => item.id !== id))
  }

  return (
    <>
      <div>
        <HeaderKitchen />
      </div>

      <div className='order-list'>
        {orderLounge.map(item => <OrdersReceived key={item.id} time={item.time} table={item.table} client={item.client} menuItem={item.menuItem} state={item.state} idDoc={item.id} removeOrder={removeOrder} />)}
      </div>

    </>
  )
}

export default KitchenNewOrder;