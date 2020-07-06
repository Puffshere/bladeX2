import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';

class LoginPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };
    this.props.dispatch(loginUserAction(data));
    console.log(data.email,'hello');
  }
  
  UNSAFE_componentDidMount() {
    document.title = 'React Login';
  }
  
  render() {
    let isSuccess, message;
    
    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.success;
      message = this.props.response.login.response.message;
      
      if (isSuccess) {
        setCookie('token', this.props.response.login.response.token, 1);
      }
    }
    
    return (
      <div className='loginPage'>
        <h1 className='loginMargins'>BladeX</h1>
        <h3>Login Page</h3>
        {!isSuccess ? <div>{message}</div> : <Redirect to='dashboard' />}
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
        Don't have account? <Link className='linkColor' to='register'>Register here</Link>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});
export default connect(mapStateToProps)(LoginPage);
