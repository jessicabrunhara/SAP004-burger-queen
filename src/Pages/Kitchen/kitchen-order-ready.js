import React from 'react';
import HeaderKitchen from 'Components/Header-Kitchen/header-kitchen';
import OrdersDelivered from 'Components/Kitchen-Order-Ready/order-ready';

const KitchenOrderReady = () => {

  return (
    <>
      <div>
        <HeaderKitchen />
      </div>

      <div>
        <OrdersDelivered />
      </div>

    </>
  )
}

export default KitchenOrderReady;