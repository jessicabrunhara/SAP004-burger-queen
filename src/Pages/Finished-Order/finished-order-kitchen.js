import React from 'react';
import HeaderKitchen from 'Components/Header-Kitchen/header-kitchen';
import './finished-order-kitchen.css';


const FinishedOrderKitchen = () => {

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
                        <li>Descrição do pedido finalizado</li>
                        <li>Descrição do pedido finalizado</li>
                        <li>Descrição do pedido finalizado</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default FinishedOrderKitchen;