import React from "react";
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link,
} from "react-router-dom";

import KitchenNewOrder from './Pages/kitchen-new-order';
import LoungeNewOrder from './Pages/lounge-new-order';
import Login from './Pages/login';
import Register from './Pages/register';
import LoungeOrderReady from './Pages/lounge-order-ready';
import KitchenOrderReady from './Pages/kitchen-order-ready';
import FinishedOrder from './Pages/finished-order';


export default function QueenRouter () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/lounge-new-order'>
         <LoungeNewOrder />
        </Route>
        <Route path='/lounge-order-ready'>
         <LoungeOrderReady />]
        </Route>
        <Route path='/kitchen-new-order'>
          <KitchenNewOrder />
        </Route>
        <Route path='/kitchen-order-ready'>
         <KitchenOrderReady />
        </Route>
        <Route path='/finished-order'>
         <FinishedOrder />
        </Route>
        <Route path='*'>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </Router>
    )
}