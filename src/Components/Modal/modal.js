import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from 'Components/Button/button';
import './modal.css';
import Input from 'Components/Input/input';

const MyModal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    console.log(props)
    const teste = () => {
        alert('deu certo')
    }

    return (
        <div>
            <Button onClick={() => setModalIsOpen(true)} className='btn-menu'>{props.children}</Button>

            <Modal {...props} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='modal-wrapper'>
                <Button onClick={() => setModalIsOpen(false)} className='btn-modal-out'>X</Button>
                <p>Escolha aqui suas opões: </p>

                <Input type='radio' name='options' value='carne'></Input>
                <label for='carne'>{props.options[0]}</label>
                <Input type='radio' name='options' value='frango'></Input>
                <label for='frango'>{props.options[1]}</label>
                <Input type='radio' name='options' value='vegetariano'></Input>
                <label for='vegetariano'>{props.options[2]}</label>

                <Input type='checkbox' name='egg'></Input>
                <label for='egg'>Ovo {[props.adds].map(item => [item.egg])}</label>

                <Input type='checkbox' name='cheese'></Input>
                <label for='cheese'>Queijo {[props.adds].map(item => [item.cheese])}</label>

            </Modal>
        </div>
    );
};

export default MyModal;


