import React from 'react';
import Button from 'Components/Button/button';
import './kitchen-order-ready.css';

const OrdersReceived = ({ id, time, table, client }) => {

    // const date = new Date(time.seconds * 1000);
    // ${ date.toLocaleString('pt-BR') }


    return (
        <div className='order-ready-wrapper'>

            <div className='table-wrapper'>
                <div className='time-wrapper'>{time}</div>
                <div className='table-number'>Mesa: {table}</div>
                <div className='client-information'>Cliente: {client}</div>
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
                <Button className='btn-menus' type='button' >Pronto para o salão</Button>
            </div>

        </div>
    )
}

export default OrdersReceived;