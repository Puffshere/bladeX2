import React, { Fragment } from "react";
import { Link } from 'react-router-dom';


const Contact = () => (
    <Fragment>
      <h1>Contact</h1>
      <h5>Contact me at:  shawncurtistaylor@hotmail.com</h5>
      <br></br>
      <br></br>
      <br></br>
    <ul>
    <li className='homeStyling'><Link to="/dashboard">Home</Link></li>
    <li className='contactStyling'><Link to="/about">About</Link></li>
    </ul>
    </Fragment>
  );

  export default Contact;
