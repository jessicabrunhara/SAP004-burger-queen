import React from 'react';
import Button from 'Components/Button/button';
import 'Components/Lounge/order-ready.css';
import firebase from 'Config/firebase';
import growl from 'growl-alert';
import 'growl-alert/dist/growl-alert.css';


const OrderReady = ({ idDoc, state, time, table, client, menuItem, removeOrder }) => {

  const upDateStatus = (id) => {
    firebase.firestore().collection('orders')
      .doc(id)
      .update({
        state: 'Pedido Finalizado',
        endTime: Date.now(),
      }).then(() => {
        removeOrder(id)
        growl({ text: 'Pedido entregue para o cliente!', type: 'success', fadeAway: true, fadeAwayTimeout: 2000 });
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
    <div className='lounge-order-wrapper'>
      <div className='lounge-table-wrapper'>
        <div className='lounge-time-wrapper'>{formatDate(time)}</div>
        <div className='client-table-wrapper'>
          <div className='lounge-table-information-a'><span className='strong-lounge'>Cliente: </span>{client} </div>
          <div className='lounge-table-information'><span className='strong-lounge'>Mesa: </span> {table} </div>
        </div>
        <div className='lounge-table-information'><span className='strong-lounge'>Status: </span>{state}</div>
        <div className='lounge-table-information'><span className='strong-lounge'>Atendente: </span> </div>
      </div>

      <div className='lounge-order-info'>

        <div className='lounge-ordered-wrapper'>
          {menuItem.filter(item => item.hamburger === true).map(element =>
            <div className='items-wrapper'>
              <div className='lounge-quantify-ordered'>{element.quantity}</div>
              <div className='lounge-item-ordered'>{element.name}</div>
              <div className='lounge-item-ordered'>Sabor: {element.burgerOption}<span>adicional: {element.adds}</span></div>
            </div>
          )}
          {menuItem.filter(item => item.hamburger === false).map(element =>
            <div className='items-wrapper'>
              <div className='lounge-quantify-ordered'>{element.quantity}</div>
              <div className='lounge-item-ordered'>{element.name}</div>
            </div>
          )}
        </div>
      </div>
      <div className='btn-wrapper-lounge-order-ready'>
        <Button onClick={() => { upDateStatus(idDoc) }} className='btn-std' children={'Entregar'} />
      </div>
    </div>
  )
}

export default OrderReady;