import React, { useState, useEffect } from 'react';
import HeaderLounge from 'Components/Header-Lounge/header-lounge';
import Menu from 'Components/Menu/menu';
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

  return (
    <div>
      <HeaderLounge />
      <Menu items={menuStore} />
    </div>
  )
}

export default LoungeNewOrder;
