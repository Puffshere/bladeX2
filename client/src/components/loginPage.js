import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


class LoginPage extends Component {
  
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };
  }
  
  render() {
     
    return (
      <div className='loginPage'>
        <h1 className='loginMargins'>BladeX</h1>
        <h3>Login Page</h3>
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label htmlFor="email">Email</label>
          <br></br>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
          <br></br>
            <input type="password" name="password" id="password" />
          </div>
          <br></br>
          <div>
            <button className='loginButton'>Login</button>
          </div>
          <br></br>
        </form>
        Don't have account? <Link className='linkColor' to='registerPage'>Register here</Link>
      </div>
    );
  }
}

export default LoginPage;
