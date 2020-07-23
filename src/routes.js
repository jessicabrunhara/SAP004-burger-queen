import React from "react";
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link,
} from "react-router-dom";

import KitchenNewOrder from './Pages/Kitchen/kitchen-new-order';
import LoungeNewOrder from './Pages/Lounge/lounge-new-order';
import Login from './Pages/Auth/login';
import Register from './Pages/Auth/register';
import LoungeOrderReady from './Pages/Lounge/lounge-order-ready';
import KitchenOrderReady from './Pages/Kitchen/kitchen-order-ready';
import FinishedOrder from './Pages/Finished-Order/finished-order';

export default function QueenRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/lounge-new-order' component={LoungeNewOrder} />
        <Route path='/lounge-order-ready' component={LoungeOrderReady} />
        <Route path='/kitchen-new-order' component={KitchenNewOrder} />
        <Route path='/kitchen-order-ready' component={KitchenOrderReady} />
        <Route path='/finished-order' component={FinishedOrder} />
        <Route path='*'>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </Router>
  )
}