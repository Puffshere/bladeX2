import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NameLoggedIn() {

    const [knives, setKnives] = useState([]);
    const [noKnives, setNoKnives] = useState('');

    useEffect(() => {
        const knivesRequest = {
            userId: '5f0587584f6e92c4ce549a24'
        }
        axios.post('https://blade-x.herokuapp.com/api/getKnives', knivesRequest).then(res => {
            if (res.data.knives.length < 0) {
                setNoKnives('You need to go buy some knives.');
            }
            setKnives(res.data);
        })
    })

    return (
        <div>
        <div className='nameLoggedInStyling'>{knives.firstname}</div>
        </div>
    );
        
}

export default NameLoggedIn;
