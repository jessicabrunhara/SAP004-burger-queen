import React from 'react';
import './kitchen.css';


const FinalizedOrders = ({ idDoc, state, time, table, client, menuItem }) => {

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
              <div className='kitchen-item-ordered'>Sabor: {element.burgerOption}<span>adicional: {element.adds}</span></div>
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
    </div >
  )
}

export default FinalizedOrders;