import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';
import DashboardPage from '../components/dashboardPage';
import YourKnifePage from '../components/yourKnifePage';
import ForSalePage from '../components/forSalePage';
import EDCRotationPage from '../components/edcRotationPage';
import WishListPage from '../components/wishListPage';
import FixedBlades from '../components/fixedBladesList';
import SlipJoints from '../components/slipJoints';
import Flippers from '../components/flippers';
import Automatics from '../components/automatics';
import Assisted from '../components/assisted';
import BladeDetails from '../components/bladeDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact={true} component={LoginPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <PrivateRoute path='/dashboard' component={DashboardPage} />
            <PrivateRoute path='/yourKnives' component={YourKnifePage} />
            <PrivateRoute path='/forSale' component={ForSalePage} />
            <PrivateRoute path='/edcRotation' component={EDCRotationPage} />
            <PrivateRoute path='/wishList' component={WishListPage} />
            <PrivateRoute path='/fixedBlades' component={FixedBlades} />
            <PrivateRoute path='/slipJoints' component={SlipJoints} />
            <PrivateRoute path='/flippers' component={Flippers} />
            <PrivateRoute path='/automatics' component={Automatics} />
            <PrivateRoute path='/assisted' component={Assisted} />
            <PrivateRoute path='/bladeDetails' component={BladeDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
