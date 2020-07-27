import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <button type={props.type} className={props.className} onClick={props.onClick}> {props.name} </button>
  )
}

export default Button;
