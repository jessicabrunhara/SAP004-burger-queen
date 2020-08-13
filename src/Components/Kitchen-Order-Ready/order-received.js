import React from 'react';
import Button from 'Components/Button/button';
import './kitchen-order-ready.css';
import firebase from 'Config/firebase';
import growl from 'growl-alert';
import 'growl-alert/dist/growl-alert.css';


const OrdersReceived = ({ idDoc, state, time, table, client, menuItem }) => {

  const upDateStatus = (id) => {
    firebase.firestore().collection('orders')
      .doc(id)
      .update({
        state: 'Pedido Pronto',
        endTime: Date.now(),
      }).then(() => {
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
    <div className='order-ready-wrapper'>
      <div className='table-wrapper'>
        <div className='time-wrapper'>{formatDate(time)}</div>
        <div className='table-number'>Mesa: {table}</div>
        <div className='client-information'>Cliente: {client}</div>
        <div className='client-information'>Status: {state}</div>
      </div>

      <div className='kitchen-order-info'>

        <div className='ordered-wrapper'>
          {menuItem.map(element =>
            <>
              <div className='quantify-ordered'>{element.quantity}</div>
              <div className='item-ordered'>{element.name}<span>R${element.price},00</span></div>
            </>
          )}
        </div>
      </div>

      <div className='btn-wrapper'>
        <Button onClick={() => { upDateStatus(idDoc) }} className='btn-order-kitchen' type='button' children={'Pronto para servir'} />
      </div>

    </div>
  )
}

export default OrdersReceived;