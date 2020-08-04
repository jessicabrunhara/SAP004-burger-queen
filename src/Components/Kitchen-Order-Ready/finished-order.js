import React from 'react';
import './kitchen-order-ready.css';


const FinalizedOrders = () => {

    return (
        <>
            <div className='order-ready-wrapper'>

                <div className='table-wrapper'>
                    <div className='time-wrapper'>Data e hora</div>
                    <div className='table-number'>Mesa: </div>
                    <div className='client-information'>Cliente: </div>
                </div>

                <div className='order-information-wrapper'>

                    <div className='ordered-wrapper'>
                        <div className='quantify-ordered'>1 x</div>
                        <div className='item-ordered'>Descrição do pedido finalizado</div>
                    </div>

                    <div className='ordered-wrapper'>
                        <div className='quantify-ordered'>1 x</div>
                        <div className='item-ordered'>Descrição do pedido finalizado</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FinalizedOrders;