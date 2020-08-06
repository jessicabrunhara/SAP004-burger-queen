import React from 'react';
import HeaderLounge from 'Components/Header-Lounge/header-lounge';
import FinalizedOrders from 'Components/Kitchen-Order-Ready/finished-order';


const FinishedOrderLounge = () => {

  return (
    <div>
      <HeaderLounge />
      <div>
        <FinalizedOrders />
      </div>
    </div>
  )
}

export default FinishedOrderLounge;