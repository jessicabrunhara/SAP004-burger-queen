import React, { useState, useEffect } from 'react';
import './menu.css';
import Button from 'Components/Button/button';
import firebase from 'Config/firebase';


const Menu = () => {

  const [menuStore, setMenuStore] = useState([]);

  let arrayMenu = [];

  /* useEffect(() => {
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
    <div className='menu-wrapper'>
      <h1>Menu</h1>
      <div className='all-menu'>

        <div className='menu-breakfast'>
          <div className='label'>Café da Manhã</div>
          <div className='btn-wrapper'>

            <div>
              {/* {menuStore.map(item => <Button key={item.id} name={item.name} className='btn-menu' type='button' />)} */}
            </div>

          </div>
        </div>

        <div className='menu-lunch'>
          <div className='label'>Almoço/Jantar</div>
          <div className='btn-wrapper'>

            <div>
              <Button className='btn-menu' type='button' name='Hamburger Duplo' />
            </div>

          </div>
        </div>
      </div >
    </div>
  )
};

export default Menu;