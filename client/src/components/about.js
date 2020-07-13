import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const About = () => (
    <Fragment>
      <h1>About</h1>
      <h5>This is an app to help you track your knife collection.  Manage your inventory.  Track costs and sell your blades.</h5>
      <br></br>
      <br></br>
      <br></br>
    <ul>
    <li className='homeStyling'><Link to="/dashboard">Home</Link></li>
    <li className='contactStyling'><Link to="/contact">Contact</Link></li>
    </ul>
    </Fragment>
  );

  export default About;