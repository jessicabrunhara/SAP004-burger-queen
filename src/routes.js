import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import KitchenNewOrder from 'Pages/Kitchen/kitchen-new-order';
import LoungeNewOrder from 'Pages/Lounge/lounge-new-order';
import Login from 'Pages/Login/';
import Register from 'Pages/Register/';
import LoungeOrderReady from 'Pages/Lounge/lounge-order-ready';
import FinishedOrderLounge from 'Pages/Finished-Order/finished-order-lounge';
import FinishedOrderKitchen from 'Pages/Finished-Order/finished-order-kitchen';

export default function QueenRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/lounge-new-order' component={LoungeNewOrder} />
        <Route path='/lounge-order-ready' component={LoungeOrderReady} />
        <Route path='/kitchen-new-order' component={KitchenNewOrder} />
        <Route path='/finished-order-lounge' component={FinishedOrderLounge} />
        <Route path='/finished-order-kitchen' component={FinishedOrderKitchen} />
        <Route path='*'>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </Router>
  )
}