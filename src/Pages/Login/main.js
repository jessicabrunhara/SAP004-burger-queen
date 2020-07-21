import React from 'react';
import logo from '../../Images/logo1.png';
import './style.css';

const Login = () => {
    return (
        <div className='login-wrapper'>
            <div className='logo-wrapper'>
                <img src={logo} alt='logo' />
            </div>
            <form>
                <input type='email'></input>
                <input type='password'></input>
                <button>Entrar</button>
            </form>
            <div>
                Registre-se
            </div>
        </div>

    )
}

export default Login;