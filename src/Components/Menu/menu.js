import React from 'react';
import './menu.css';
import Button from 'Components/Button/button';


const Menu = ({ id, name }) => {

  return (
    <div className='menu-wrapper'>
      <h1>Menu</h1>
      <div className='all-menu'>

        <div className='menu-breakfast'>
          <div className='label'>Café da Manhã</div>
          <div className='btn-wrapper'>

            <div>
              <Button className='btn-menu' type='button'>{id} {name}</Button>
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