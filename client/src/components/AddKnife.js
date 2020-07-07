import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import KnifeStyleDropdown from './knifeStyleDropDown';
import './style.css';
import Table from './table';
import SignOut from './signOut';
import CurrentDate from './currentDate';


function AddKnifeModal() {

    const [knives, setKnives] = useState([]);
    const [noKnives, setNoKnives] = useState('');

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        brand: '',
        model: '',
        price: 0,
        steel: '',
        handleMaterial: '',
        bladeShape: '',
        checkbox: false,
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
        <>
            <Wrapper>
                <Title>Add a Blade!</Title>
                <DateStyling><CurrentDate date={Date()} /></DateStyling>
                <DropdownStyling>
                    <KnifeStyleDropdown />
                </DropdownStyling>
                <input placeholder='firstname' name='firstname' onChange={(e) => onChange(e)} />
                <input placeholder='lastname' name='lastname' onChange={(e) => onChange(e)} />
                <input placeholder='email' name='email' onChange={(e) => onChange(e)} />
                <input placeholder='password' name='password' type='password' onChange={(e) => onChange(e)} />
                <input placeholder='brand' name='brand' onChange={(e) => onChange(e)} />
                <input placeholder='model' name='model' onChange={(e) => onChange(e)} />
                <input placeholder='price' name='price' onChange={(e) => onChange(e)} />
                <input placeholder='steel' name='steel' onChange={(e) => onChange(e)} />
                <input placeholder='handle material' name='handleMaterial' onChange={(e) => onChange(e)} />
                <input placeholder='blade shape' name='bladeShape' onChange={(e) => onChange(e)} />
                <BTN onClick={() => handleSubmit()}>Submit</BTN>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Wrapper>
        </>
    )
}

const DropdownStyling = styled.div`
text-align: center;
`

const DateStyling = styled.h5`
    color: maroon;
    text-align: center;
    margin-top: 1px;
`

const Title = styled.div`
    color: maroon;
    text-shadow: 1px 1px 1px whitesmoke;
    text-align: center;
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 10px;
`

const BTN = styled.button`
    text-shadow: 1px 1px 1px grey;
    background-color: maroon;
    margin-top: 20px;
    color: whitesmoke;
    float: right;
    margin-bottom: 20px;
    margin-right: 20px;
 &:hover {
    background-color: #620000;
    cursor: pointer
  }
 &:focus {
    background-color: #3d0000;
    cursor: pointer
  }
    
`

const Wrapper = styled.div`
    input {
        display: block;
        margin: 5px auto;
    }
    display: block;
    width: 300px;
    margin: 0 auto;
    box-shadow: 5px 5px 5px 5px #330000;
    border-radius: 8px;
    margin-top: 20px;
    background-color: floralwhite;
`

export default AddKnifeModal;
