import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
//import HomeCozinha from '../src/Pages/Home-Cozinha/home-cozinha';
//import HomeSalao from '../src/Pages/Home-Salao/home-salao';
//import Login from '../src/Pages/Login/login';
//import Register from '../src/Pages/Register/register';
import QueenRouter from './routes.js'
import './global-style.css';


function App() {
  return (
    <div>
      <QueenRouter />
    </div>
  );
}

export default App;