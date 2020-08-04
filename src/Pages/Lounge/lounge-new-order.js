import React, { useState, useEffect } from 'react';
import HeaderLounge from 'Components/Header-Lounge/header-lounge';
import Menu from 'Components/Menu/menu';
import OrderRegister from 'Components/Order-Register/order-register';
import 'Components/Order-Register/order-register.css'
import firebase from 'Config/firebase';
import './lounge-new-order.css';

const LoungeNewOrder = () => {

  const [menuStore, setMenuStore] = useState([]);

  useEffect(() => {
    firebase.firestore()
      .collection('menu')
      .get()
      .then((result) => {
        const arrayMenu = [];
        result.docs.forEach(doc => {
          arrayMenu.push({
            id: doc.id,
            ...doc.data()
          })
        })
        setMenuStore(arrayMenu)
      })
  }, []);
  console.log(menuStore);

  return (
    <div>
      <HeaderLounge />

      <div className='page-menu-wrapper'>
        <Menu items={menuStore} />
        <OrderRegister />
      </div>

    </div>
  )
}

export default LoungeNewOrder;