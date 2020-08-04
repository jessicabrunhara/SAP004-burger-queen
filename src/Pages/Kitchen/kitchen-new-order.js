import React from 'react';
import HeaderKitchen from 'Components/Header-Kitchen/header-kitchen';
import Button from 'Components/Button/button';
import OrdersReceived from 'Components/Kitchen-Order-Ready/new-order';

const KitchenNewOrder = () => {

  return (
    <>
      <div>
        <HeaderKitchen />
      </div>

      <div>
        <OrdersReceived />
      </div>

    </>
  )
}

export default KitchenNewOrder;