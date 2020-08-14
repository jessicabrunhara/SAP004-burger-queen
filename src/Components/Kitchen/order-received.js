import React, { useState, useEffect } from 'react';
import Button from 'Components/Button/button';
import './kitchen.css';
import firebase from 'Config/firebase';
import growl from 'growl-alert';
import 'growl-alert/dist/growl-alert.css';


const OrdersReceived = ({ idDoc, state, time, table, client, menuItem, removeOrder }) => {

  const upDateStatus = (id) => {
    firebase.firestore().collection('orders')
      .doc(id)
      .update({
        state: 'Pedido Pronto',
        endTime: Date.now(),
      }).then(() => {
        removeOrder(id)
        growl({ text: 'Pedido enviado para o salão!', type: 'success', fadeAway: true, fadeAwayTimeout: 2000 });
      }).catch(() => {
        growl({ text: 'Erro ao enviar o seu pedido, tente novamente', type: 'error', fadeAway: true, fadeAwayTimeout: 2000 });
      })
  }

  const formatDate = (dateOrder) => {
    if (dateOrder != null) {
      const options = {
        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
        second: '2-digit'
      };
      return new Date(dateOrder).toLocaleString([], options);
    }
  }

  return (
    <div className='kitchen-order-wrapper'>
      <div className='kitchen-table-wrapper'>
        <div className='kitchen-time-wrapper'>{formatDate(time)}</div>
        <div className='client-table-wrapper'>
          <div className='kitchen-table-information-a'><span className='strong-kitchen'>Cliente: </span>{client} </div>
          <div className='kitchen-table-information'><span className='strong-kitchen'>Mesa: </span> {table} </div>
        </div>
        <div className='kitchen-table-information'><span className='strong-kitchen'>Status: </span>{state}</div>
        <div className='kitchen-table-information'><span className='strong-kitchen'>Atendente: </span> Oioioi</div>
      </div>

      <div className='kitchen-order-info'>

        <div className='kitchen-ordered-wrapper'> 
          {menuItem.filter(item => item.hamburger === true).map(element =>
            <div className='items-wrapper'>
              <div className='kitchen-quantify-ordered'>{element.quantity}</div>
              <div className='kitchen-item-ordered'>{element.name}</div>
              <div className='kitchen-item-ordered'>Sabor: {element.burgerOption}</div>
                <div className='kitchen-item-ordered'>adicional: {element.adds}</div>
              <div className='kitchen-price-ordered'>R${element.price},00</div>
            </div>
          )}
          {menuItem.filter(item => item.hamburger === false).map(element =>
            <div className='items-wrapper'>
              <div className='kitchen-quantify-ordered'>{element.quantity}</div>
              <div className='kitchen-item-ordered'>{element.name}</div>
              <div className='kitchen-price-ordered'>R${element.price},00</div>
            </div>
          )}
        </div>
      </div>

      <div className='btn-wrapper'>
        <Button onClick={() => { upDateStatus(idDoc) }} className='btn-order-kitchen' type='button' children={'Pronto para servir'} />
      </div>

    </div >
  )
}

export default OrdersReceived;