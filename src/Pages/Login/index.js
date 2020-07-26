import React, { useState } from 'react';
import firebase from 'Config/firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msgType, setMsgType] = useState();

  const signIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        setMsgType('sucesso');
      }).catch(erro => {
        setMsgType('erro');
      })
  }

  return (
    <div className='login-wrapper'>
      <form>
        <div>
          <h1>Login</h1>
        </div>

        <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'></input>
        <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha'></input>

        <button onClick={signIn} type="button">Entrar</button>
        <div>
          {msgType === 'sucesso' && <span><strong>WoW!</strong>Você está conectado! &#128526;</span>}
          {msgType === 'erro' && <span><strong>Ops!</strong>Verifique se a senha ou usuário estão corretos! &#128546;</span>}
        </div>

        <div>
          <Link to='/register'>Registre-se</Link>
        </div>

      </form>
    </div>

  )
}

export default Login;