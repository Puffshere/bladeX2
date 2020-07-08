import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
class RegisterPage extends Component {
  onHandleRegistration = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      name, email, password
    };
  }

  render() {
  //   let message, isSuccess;

  //   if (this.props.response.register.hasOwnProperty('response')) {
  //     isSuccess = this.props.response.register.response.success;
  //     message = this.props.response.register.response.message;

    return (
      <div className="registerPage">
        <h1 className='loginMargins'>BladeX</h1>
        <h3>RegisterPage</h3>
        {/* {!isSuccess ? <div>{message}</div> : <Redirect to='login' />} */}
        <form onSubmit={this.onHandleRegistration}>
          <div>
            <label htmlFor="name">Name</label>
            <br></br>
            <input type="text" name="name" id="name" />
          </div>
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
            <button className='registerButton'>Register</button>
          </div>
          <br></br>
        </form>
        Already have account? <Link className='linkColor' to='loginPage'>Login here</Link>
      </div>
    )
  }
  }

export default RegisterPage;
