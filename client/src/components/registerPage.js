import { Link } from 'react-router-dom';
import './../App.css';
import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {

  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  })

  const handleSubmit = () => {
    axios
      .post('/api/adduser', state)
      .then(res => {
        console.log('successfully added new user!')
      })
      .catch(err => console.log(err, 'failed to add new user'));
    setState({
    })
  }

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="registerPage">
      <h1 className='loginMargins'>BladeX</h1>
      <h3>RegisterPage</h3>
      <form>
        <div>
          <label htmlFor="firstname">First Name</label>
          <br></br>
          <input type="text" name="firstname" id="firstname" onChange={(e) => onChange(e)} />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <br></br>
          <input type="text" name="lastname" id="Lastname" onChange={(e) => onChange(e)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br></br>
          <input type="email" name="email" id="email" onChange={(e) => onChange(e)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br></br>
          <input type="password" name="password" id="password" onChange={(e) => onChange(e)} />
        </div>
        <br></br>
        <div>
          <button onClick={() => handleSubmit()} className='registerButton'>Register</button>
        </div>
        <br></br>
      </form>
        Already have account? <Link className='linkColor' to='loginPage'>Login here</Link>
    </div>
  )
}

export default RegisterPage;
