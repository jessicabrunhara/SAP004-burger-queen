import React, { useState } from 'react';
import firebase from 'Config/firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import Input from 'Components/Input/input';
import Button from 'Components/Button/button';
import './login.css';
import Logo from 'Components/Logo/logo';

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
    <div class='login-wrapper'>
      <Logo/>
      <form>
        <Input class='input-std' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'/>
        <Input class='input-std' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha'/>
        
        <Button class='btn-std' onClick={signIn} type='button' name='Entrar'/>
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