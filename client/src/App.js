import './App.css';
import AddKnifeModal from './components/AddKnife';
import React, { Fragment } from "react";
import "./index.css"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ForSalePage from './components/forSalePage';
// import PrivateRoute from './privateRoute';
// import LoginPage from './components/loginPage';
// import RegisterPage from './components/registerPage';
// import YourKnifePage from './components/yourKnifePage';
import EDCRotationPage from './components/edcRotationPage';
import WishListPage from './components/wishListPage';
import FixedBlades from './components/fixedBladesList';
import SlipJoints from './components/slipJoints';
import Flippers from './components/flippers';
import Automatics from './components/automatics';
import Assisted from './components/assisted';
import Dashboard from './components/dashboard';
import BladeDetails from './components/bladeDetails';


function App() {

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/forSale" component={ForSalePage} />
          <Route path='/fixedBlades' component={FixedBlades} />
          <Route path='/slipJoints' component={SlipJoints} />
          <Route path='/flippers' component={Flippers} />
          <Route path='/automatics' component={Automatics} />
          <Route path='/assisted' component={Assisted} />
          <Route path='/addKnife' component={AddKnifeModal} />
          <Route path='/edcRotation' component={EDCRotationPage} />
          <Route path='/wishList' component={WishListPage} />
          <Route path='/bladeDetails' component={BladeDetails} />
        </Switch>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </main>
    </Router>
  );
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
);

const About = () => (
  <Fragment>
    <h1>About</h1>
  </Fragment>
);

const Contact = () => (
  <Fragment>
    <h1>Contact</h1>
  </Fragment>
);

export default App;
