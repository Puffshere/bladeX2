import React, { } from 'react';
import { Link } from 'react-router-dom';

const SignOut = (props) => {
    return (
        <Link to='/'><div className='signOutStyling'>Sign Out</div></Link>
    )
}

export default SignOut;
