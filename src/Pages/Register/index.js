import React, { useState } from 'react';
import './register.css';
import firebase from 'Config/firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { Link } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msgType, setMsgType] = useState();
  const [msg, setMsg] = useState();
  const [loading, setLoading] = useState();
  const [sector, setSector] = useState();

  /* function createUser(email, firstName, lastName, sector) {
    console.log(sector.value);
    if (sector.value === 'kitchen') {
      firebase.firestore().collection('userKitchen').add({
        firstName,
        lastName,
        email,
        sector,
        uid: firebase.auth().currentUser.uid,
      });
    } else {
      firebase.firestore().collection('userLounge').add({
        firstName,
        lastName,
        email,
        uid: firebase.auth().currentUser.uid,
      });
    }
  } */

  const signUp = () => {

    setLoading(1);
    setMsgType(null);

    if (!email || !password) {
      setMsgType('erro')
      setMsg('Informações incompletas. Informe email e senha para se cadastrar')
      return
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(0);
        setMsgType('sucesso')
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
    <div className='login-wrapper'>
      <div>Página de Registro</div>
      <form>
        <input onChange={(e) => setFirstName(e.target.value)} type='text' placeholder='Nome'></input>
        <input onChange={(e) => setLastName(e.target.value)} type='text' placeholder='Sobrenome'></input>
        <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email'></input>
        <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha'></input>

        <div onChange={(e) => setSector(e.target.value)}>
          <label>Selecione seu setor</label>
          <label>Cozinha</label>
          <input type='radio' value='kitchen' name='sector' id='kitchen' required />
          <label>Salão</label>
          <input type='radio' value='lounge' name='sector' id='lounge' required />
        </div>

        {
          loading ? <div className="spinner-border text-danger" role="status"><span className="sr-only">Loading...</span></div>
            : <button onClick={signUp} type="button">Cadastrar</button>
        }
        <div>
          {msgType === 'sucesso' && <span><strong>WoW!</strong>Usuário cadastrado com sucesso! &#128526;</span>}
          {msgType === 'erro' && <span><strong>Ops!</strong> {msg} &#128546;</span>}
        </div>
      </form >
      <div>
        <p>Já é cadastrado?</p>
        <Link to='/'>Faça login</Link>
      </div>
    </div >

  )
}

export default Register;