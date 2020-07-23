import React from 'react';
// import logo from '../../Images/logo1.png';
//import './login.css';
// import firebase from 'firebase';
// import firebaseConfig from '../../firebase-config';
// import 'firebase/auth';
// firebase.initializeApp(firebaseConfig);

// firebaseConfig.auth

const Login = () => {

  return (
    <div className='login-wrapper'>
      <div>Página de Login</div>
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