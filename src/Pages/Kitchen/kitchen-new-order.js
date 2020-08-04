import React from 'react';
import HeaderKitchen from 'Components/Header-Kitchen/header-kitchen';
import Button from 'Components/Button/button';
import './kitchen-new-order.css';

const KitchenNewOrder = () => {

  return (
    <>
      <div>
        <HeaderKitchen />
      </div>

      <div className='order-kitchen-wrapper'>

        <div className='data-hour'>Data e hora</div>
        <div className='client-name'>Cliente: </div>
        <div className='customer-table'>Mesa: </div>

        <div className='items-order'>
          <ul className='list-order'>
            <li>Descrição do item pedido</li>
            <li>Descrição do item pedido</li>
            <li>Descrição do item pedido</li>
          </ul>
        </div>

        <div className='order-ready'>
          <Button className='btn-menus' type='button' name='Pronto para o salão' />
        </div>

      </div>

    </>
  )
}

export default KitchenNewOrder;