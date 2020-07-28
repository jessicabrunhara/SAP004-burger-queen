import React, { useState } from 'react';
import './register.css';
import firebase from 'Config/firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { Link } from 'react-router-dom';
import Logo from 'Components/Logo/logo';
import Input from 'Components/Input/input'
import Button from 'Components/Button/button'

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [sector, setSector] = useState();
  const [msgType, setMsgType] = useState();
  const [msg, setMsg] = useState();
  const [loading, setLoading] = useState();

  /* const newUser = () => {
    firebase.firestore().collection('users').add({
      name: name,
      email: email,
      sector: sector,
      userId: firebase.auth().currentUser.uid,
    });
  } */

  const signUp = () => {

    setLoading(1);
    setMsgType(null);

    if (!email || !password || !name || !sector) {
      setMsgType('erro')
      setMsg('Informações incompletas. Preencha todos os campos para se cadastrar')
      return
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(0);
        setMsgType('sucesso');
      }).catch(erro => {
        setLoading(0);
        setMsgType('erro')
        switch (erro.message) {
          case 'Password should be at least 6 characters':
            setMsg('A senha deve conter pelo menos 6 caracteres!');
            break;
          case 'The email address is already in use by another account.':
            setMsg('Este email já está sendo utilizado por outro usuário!');
            break;
          case 'The email address is badly formatted.':
            setMsg('O formato do seu email é inválido!');
            break;
          default:
            setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
        }
      })
  }

  return (
    <div className='register-wrapper'>
      <Logo className='logo-register' />
      <form className='register-form'>
        <Input className='input-register' onChange={(e) => setName(e.target.value)} type='text' placeholder='Nome Completo' />
        <Input className='input-register' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' />
        <Input className='input-register' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' />

        <div className='options-wrapper'>
          <p>Selecione o seu setor: </p>
          <select onChange={(e) => setSector(e.target.value)} name='select-type' id='select-type' className='options-sector'>
            <option disabled selected value> --- </option>
            <option className='sector' value='kitchen'>Cozinha</option>
            <option className='sector' value='lounge'>Salão</option>
          </select>
        </div>
        {
          loading ? <div className="spinner-border text-danger" role="status"><span className="sr-only">Loading...</span></div>
            : <Button className='btn-std' onClick={signUp} type="button" name='Cadastrar' />
        }
        <div>
          {msgType === 'sucesso' && <span><strong>WoW!</strong>Usuário cadastrado com sucesso! &#128526;</span>}
          {msgType === 'erro' && <span><strong>Ops!</strong> {msg} &#128546;</span>}
        </div>
      </form >
      <div className='login-link'>
        <p>Já é cadastrado?</p>
        <Link to='/'>Faça login</Link>
      </div>
    </div >
  )
}

export default Register;