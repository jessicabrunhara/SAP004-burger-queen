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
                <Button onClick={() => setModalIsOpen(false)} className='btn-modal-out'><p className='modal-close'>X</p></Button>
                <div className='modal-options'>Opções do Hambúrguer</div>
                {props.options.map(option =>
                    <>
                        <span><Input type='radio' className='radio-modal'name='options' value={option}></Input>
                        <aria-label htmlFor={option}>{option}</aria-label></span>
                    </>
                )}
                <div className='modal-options'>Adicionais: </div>
                <span>
                            
                    <Input type='checkbox'></Input>
                    <aria-label className= 'radio-label'> Ovo </aria-label></span>

                
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


