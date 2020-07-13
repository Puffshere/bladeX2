import React, { } from 'react';
import { Link } from 'react-router-dom';

const SignIn = (props) => {
    return (
        <Link to='loginPage'><div className='signInStyling'>Sign In</div></Link>
    )
}

export default SignIn;
