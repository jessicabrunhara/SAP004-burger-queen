import React, { useState, useEffect } from 'react';
import HeaderLounge from 'Components/Header-Lounge/header-lounge';
import Menu from 'Components/Menu/menu';
import OrderRegister from 'Components/Order-Register/order-register';
import 'Components/Order-Register/order-register.css'
import firebase from 'Config/firebase';


const LoungeNewOrder = () => {

  /* const [menuStore, setMenuStore] = useState([]);
 
   let arrayMenu = [];

   useEffect(() => {
     firebase.firestore()
       .collection('menu')
       .get()
       .then(async (result) => {
         await result.docs.forEach(doc => {
           arrayMenu.push({
             id: doc.id,
             ...doc.data()
           })
         })
         setMenuStore(arrayMenu)
       })
   }); */

  return (
    <div>
      <HeaderLounge />

      {/*  <div className='new-order-wrapper'>
        {menuStore.map(item => <Menu key={item.id} name={item.name} />)}
      </div> */}

      <div>
        <Menu></Menu>
        <OrderRegister />
      </div>

    </div>
  )
}

export default LoungeNewOrder;