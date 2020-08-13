import React, { useState, useEffect } from 'react';
import HeaderLounge from 'Components/Header-Lounge/header-lounge';
import FinalizedOrders from 'Components/Kitchen-Order-Ready/finished-order';
import firebase from 'Config/firebase';


const FinishedOrderLounge = () => {
  const [finalizedOrder, setFinalizedOrder] = useState([]);

  useEffect(() => {
    firebase.firestore()
      .collection('orders')
      .orderBy('time', 'asc')
      .where('state', '==', 'Pedido Finalizado')
      .get()
      .then((result) => {
        const arrayOrderReady = [];
        result.docs.forEach(doc => {
          arrayOrderReady.push({
            id: doc.id,
            ...doc.data()
          })
        })
        setFinalizedOrder(arrayOrderReady)
      })
  }, []);

  return (
    <div>
      <HeaderLounge />
      <div>
        {finalizedOrder.map(item => <FinalizedOrders key={item.id} time={item.time} table={item.table} client={item.client} menuItem={item.menuItem} state={item.state} idDoc={item.id} />)}
      </div>
    </div>
  )
}

export default FinishedOrderLounge;