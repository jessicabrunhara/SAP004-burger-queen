import React, { useState } from 'react';
import Modal from 'react-modal';

const Modal = (props) => {
    return (
        <div className='modal'>
            <modal>
                <p>Modal </p>
            </modal>
           
        </div>
    );
};



const Input = (props) => {
    return (
      <input type={props.type} className={props.className} name={props.name} value={props.value} id={props.id} placeholder={props.placeholder} onChange={props.onChange} />
    );
  };
  
  export default Input;

export default Modal;
