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
        setMsgType('sucesso')

        firebase.firestore().collection('userProfile')
          .where('uid', '==', firebase.auth().currentUser.uid)
          .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(doc.data());
            });
          });
      })
      .catch(erro => {
        setMsgType('erro');
      });
  }

  return (
    <div className='login-wrapper'>
      <Logo className='logo-login' />
      <form className='login-form'>
        <Input className='input-login' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
        <Input className='input-login' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' />

        <Button className='btn-std' onClick={signIn} type='button' name='Entrar' />
        <div>
          {msgType === 'sucesso' && <span><strong>WoW!</strong>Você está conectado! &#128526;</span>}
          {msgType === 'erro' && <span><strong>Ops!</strong>Verifique se a senha ou usuário estão corretos! &#128546;</span>}
        </div>

        <div className='register-link'>
          <p>Não tem uma conta?</p>
          <Link to='/register'>Registre-se</Link>
        </div>

      </form>
    </div>

  )
}

export default Login;