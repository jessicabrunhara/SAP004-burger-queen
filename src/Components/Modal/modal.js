import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from 'Components/Button/button';
import './modal.css';
import Input from 'Components/Input/input';

const MyModal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    console.log(props)

    return (
        <div>
            <Button onClick={() => setModalIsOpen(true)} className='btn-menu'>{props.children}</Button>

            <Modal {...props} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='modal-wrapper'>
                <Button onClick={() => setModalIsOpen(false)} className='btn-modal-out'>X</Button>
                <p>Escolha aqui suas opões: </p>
                {props.options.map(option =>
                    <>
                        <Input type='radio' name='options' value={option}></Input>
                        <label htmlFor={option}>{option}</label>
                    </>
                )}

                {/* props.adds.map(item =>
                    <>
                        <Input type='checkbox' name={item}></Input>
                        <label htmlFor={item}>{[adds]}</label>
                    </>
                )*/ }

                {Object.entries(adds =>

                    <>
                        <Input type='checkbox' name={[]}></Input>
                        <label htmlFor={[]}>{[adds].map(item => [item])}</label>
                    </>
                )}


                {/* <Input type='checkbox' name='egg'></Input>
                <label htmlFor='egg'>Ovo {[props.adds].map(item => [item.egg])}</label>

                <Input type='checkbox' name='cheese'></Input>
                <label htmlFor='cheese'>Queijo {[props.adds].map(item => [item.cheese])}</label> */}

            </Modal>
        </div>
    );
};

export default MyModal;


