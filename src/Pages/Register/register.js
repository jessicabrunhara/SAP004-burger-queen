import React from 'react';

const Register = () => {

    return (
        <div className='login-wrapper'>
            <form>
                <input type='text' placeholder='Nome'></input>
                <input type='email' placeholder='email'></input>
                <input type='password' placeholder='Senha'></input>
                <button>Cadastrar</button>
            </form>
            <div>
                Voltar
            </div>
        </div>

    )
}

export default Register;