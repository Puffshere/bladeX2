import React, { Fragment } from "react";
import { Link } from 'react-router-dom';


const Contact = () => (
    <Fragment>
      <div className='aboutPic'></div>
      <h1 className='aboutHeader'>Contact</h1>
      <h5 className='aboutBody'>Contact me at:  shawncurtistaylor@hotmail.com</h5>
      <br></br>
      <br></br>
      <br></br>
      <div className='linkStyling'>
    <ul>
    <li className='homeStyling'><Link to="/dashboard">Home</Link></li>
    <li className='aboutStyling'><Link to="/contact">About</Link></li>
    </ul>
    </div>
    </Fragment>
  );

  export default Contact;
