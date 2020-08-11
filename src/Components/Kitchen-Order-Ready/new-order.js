import React from 'react';
import Button from 'Components/Button/button';
import './kitchen-order-ready.css';

const OrdersReceived = () => {

    return (
        <div className='order-ready-wrapper'>

            <div className='table-wrapper'>
                <div className='time-wrapper'>Data e hora</div>
                <div className='table-number'>Mesa: </div>
                <div className='client-information'>Cliente: </div>
            </div>

            <div className='order-information-wrapper'>

                <div className='ordered-wrapper'>
                    <div className='quantify-ordered'>1 x</div>
                    <div className='item-ordered'>Descrição do item pedido</div>
                </div>

                <div className='ordered-wrapper'>
                    <div className='quantify-ordered'>1 x</div>
                    <div className='item-ordered'>Descrição do item pedido</div>
                </div>

            </div>

            <div className='btn-wrapper'>
                <Button className='btn-order-kitchen' type='button' >Pronto para o salão</Button>
            </div>

        </div>
    )
}

export default OrdersReceived;