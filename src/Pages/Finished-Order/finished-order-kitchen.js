import React from 'react';
import HeaderKitchen from 'Components/Header-Kitchen/header-kitchen';
import FinalizedOrders from 'Components/Kitchen-Order-Ready/finished-order';


const FinishedOrderKitchen = () => {

    return (
        <>
            <div>
                <HeaderKitchen />
            </div>

            <div>
                <FinalizedOrders />
            </div>

        </>
    )
}

export default FinishedOrderKitchen;