import React from 'react';
import './kitchen-order-ready.css';


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
    <>
      <div className='order-ready-wrapper'>
        <div className='table-wrapper'>
          <div className='time-wrapper'>{formatDate(time)}</div>
          <div className='table-number'>Mesa:{table} </div>
          <div className='client-information'>Cliente:{client} </div>
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
      </div>
    </>
  )
}

export default FinalizedOrders;