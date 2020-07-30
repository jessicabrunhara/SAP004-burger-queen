import React from 'react';
import Header from 'Components/Header-Lounge/header-lounge';

const LoungeNewOrder = () => {

  return (
    <div>
      <Header />
      <div>
        <p>Olá, garçom.</p>
        <div>
          <div>
            <p><strong>Itens café da manhã</strong></p>
            <div>Ítem	Preço R$</div>
            <div>Café americano	5</div>
            <div>Café com leite	7</div>
            <div>Misto Quente	10</div>
            <div>Suco de fruta natural	7</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoungeNewOrder;