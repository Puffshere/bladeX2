import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function AddKnifeModal() {

    const[knives, setKnives] = useState([]);
    const[noKnives, setNoKnives] = useState('');

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        brand: '',
        model: '',
        price: 0,
        steel: ''
    })

    useEffect(() => {
        const knivesRequest = {
            userId: '5efec25c4afd732f57f5a5f4'
        }
        axios.post('https://bladexapp.herokuapp.com/api/getKnives', knivesRequest).then(res => {
            if(res.data.knives.length < 0){
                setNoKnives('You need to go buy some knives.');
            }
            setKnives(res.data.knives);
        })
    })

    const handleSubmit = () => {
        axios
            .post('/api/adduser', state)
            .then(res => {
                console.log('successfully added new user!')
            })
            .catch(err => console.log(err, 'failed to add new user'));
    }

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const MyKnives = () => {
        if(knives.length > 0){
            return(
                <div>
                    <h1>My Knives</h1>
                    {knives.map(knife => {
                        return(
                            <div>
                                <p>{knife.brand}</p>
                                <p>{knife.price}</p>
                                <p>{knife.steel}</p>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <h4>Loading...</h4>
            )
        }
    }

    return (
        <Wrapper>
            <Title>I am the add knife modal</Title>
            {!noKnives && <MyKnives />}
            {noKnives && <h3>{noKnives}</h3>}
            <input placeholder='firstname' name='firstname' onChange={(e) => onChange(e)} />
            <input placeholder='lastname' name='lastname' onChange={(e) => onChange(e)} />
            <input placeholder='email' name='email' onChange={(e) => onChange(e)} />
            <input placeholder='password' name='password' type='password' onChange={(e) => onChange(e)} />
            <input placeholder='brand' name='brand' onChange={(e) => onChange(e)} />
            <input placeholder='model' name='model' onChange={(e) => onChange(e)} />
            <input placeholder='price' name='price' onChange={(e) => onChange(e)} />
            <input placeholder='steel' name='steel' onChange={(e) => onChange(e)} />
            <button onClick={() => handleSubmit()}>Submit</button>
        </Wrapper>
    )

}

const Title = styled.h4`
    color: green;
`

const Wrapper = styled.div`
    input {
        display: block;
        margin: 5px auto;
    }
    display: block;
    width: 300px;
    margin: 0 auto;
    box-shadow: 0 0 5px gray;
    border-radius: 8px;
`

export default AddKnifeModal;