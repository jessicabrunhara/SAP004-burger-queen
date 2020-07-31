import React from 'react';
import './menu.css'
import Button from 'Components/Button/button'


const Menu = () => {
  return (
    <div className='menu-wrapper'>
      <h1>Menu</h1>
      <div className='all-menu'>
        <div className='menu-breakfast'>
          <div className='label'>Café da Manhã</div>
          <div className='btn-wrapper'>
            <div>
              <Button className='btn-menu' type='button' name='Café Americano' />
              <label>R$5,00</label>
            </div>
            <div>
              <Button className='btn-menu' type='button' name='Café Com Leite' />
              <label>R$7,00</label>
            </div>
            <div>
              <Button className='btn-menu' type='button' name='Café Misto Quente' />
              <label>R$10,00</label>
            </div>
            <div>
              <Button className='btn-menu' type='button' name='Suco de Fruta Natural' />
              <label>R$7,00</label>
            </div>
          </div>
        </div>
        <div className='menu-lunch'>
          <div className='label'>Almoço/Jantar</div>
          <div className='btn-wrapper'>
            <div>
              <Button className='btn-menu' type='button' name='Hamburger Duplo' />
              <label>R$10,00</label>
            </div>
            <div>
              <Button className='btn-menu' type='button' name='Hamburger Simples' />
              <label>R$15,00</label>
            </div>
            <div>
              <Button className='btn-menu' type='button' name='Batata Frita' />
              <label>R$5,00</label>
            </div>
            <div>
              <Button className='btn-menu' type='button' name='Anéis de Cebola ' />
              <label>R$5,00</label>
            </div>
            <div>
              <Button className='btn-menu' type='button' name='Água 500ml' />
              <label>R$5,00</label>
            </div>
            <div>
              <Button className='btn-menu' type='button' name='Água 750ml' />
              <label>R$7,00</label>
            </div>
            <div>
              <Button className='btn-menu' type='button' name='Refrigerante 500ml' />
              <label>R$7,00</label>
            </div>
            <div>
              <Button className='btn-menu' type='button' name='Refrigerante 750ml' />
              <label>R$10,00</label>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
};

export default Menu;