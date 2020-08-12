import React from 'react';
import Button from 'Components/Button/button';
import './kitchen-order-ready.css';
import firebase from 'Config/firebase';

const OrdersReceived = ({ idDoc, state, time, table, client, menuItem }) => {
    console.log(idDoc)

    const upDateStatus = (id) => {
        firebase.firestore().collection('orders')
            .doc(id)
            .update({
                state: 'Pedido Pronto',
                endTime: Date.now(),
            }).then(() => {
                alert('pedido enviado para salao!')
            }).catch(() => {
                alert('deu ruim');
            })
    }

    // const date = new Date(time.seconds * 1000);
    // ${ date.toLocaleString('pt-BR') }
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
        <div className='order-ready-wrapper'>
            {/* {idDoc.filter(order => order.state === 'Preparando')} */}
            <div className='table-wrapper'>
                <div className='time-wrapper'>{formatDate(time)}</div>
                <div className='table-number'>Mesa: {table}</div>
                <div className='client-information'>Cliente: {client}</div>
                <div className='client-information'>Status: {state}</div>
            </div>

            <div className='order-information-wrapper'>

                <div className='ordered-wrapper'>
                    {menuItem.map(element =>
                        <>
                            <div className='quantify-ordered'>{element.quantity}</div>
                            <div className='item-ordered'>{element.name}<span>R${element.price},00</span></div>
                        </>
                    )}
                </div>
            </div>

            <div className='btn-wrapper'>
                <Button onClick={() => { upDateStatus(idDoc) }} className='btn-order-kitchen' type='button' >Enviar para o salão</Button>
            </div>

        </div>
    )
}

export default OrdersReceived;