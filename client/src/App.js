import './App.css';
import AddKnifeModal from './components/AddKnife';
import React, { Fragment } from "react";
import "./index.css"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ForSalePage from './components/forSalePage';
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';
import Edc from './components/edcRotationPage';
import WishList from './components/wishListPage';
import FixedBlades from './components/fixedBladesList';
import SlipJoints from './components/slipJoints';
import Flippers from './components/flippers';
import Automatics from './components/automatics';
import Assisted from './components/assisted';
import Dashboard from './components/dashboard';
import BladeDetails from './components/bladeDetails';
import ThumbStud from './components/thumbStud';
import About from './components/about';
import Contact from './components/contact';
import KnifeBackground from './components/knifeBackground';
import KnifeImage from './components/knifeImage';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/forSale" component={ForSalePage} />
          <Route path='/fixedBlades' component={FixedBlades} />
          <Route path='/slipJoints' component={SlipJoints} />
          <Route path='/flippers' component={Flippers} />
          <Route path='/automatics' component={Automatics} />
          <Route path='/assisted' component={Assisted} />
          <Route path='/addKnife' component={AddKnifeModal} />
          <Route path='/edcRotation' component={Edc} />
          <Route path='/wishList' component={WishList} />
          <Route path='/bladeDetails' component={BladeDetails} />
          <Route path='/loginPage' component={LoginPage} />
          <Route path='/registerPage' component={RegisterPage} />
          <Route path='/thumbStud' component={ThumbStud} />
          <Route path='/' component={KnifeBackground} />
        </Switch>
        <nav>
          <br></br>
          <br></br>
          <br></br>
         
        </nav>
      </main>
    </Router>
  );
}






export default App;
