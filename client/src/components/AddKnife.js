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

    useEffect(() => {
        const knivesRequest = {
            userId: '5f010508c7531138565af6ff'
        }
        axios.post('https://bladexapp.herokuapp.com/api/getKnives', knivesRequest).then(res => {
            if (res.data.knives.length < 0) {
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
        setState({

        })
    }

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const MyKnives = () => {
        if (knives.length > 0) {
            return (
                <div>
                    {knives.map(knife => {
                        return (
                            <div>
                                <table className='container tableMargins'>
                                    <thead>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='show1 shane'>{knife.brand}</td>
                                            <td className='show1 shane'>{knife.model}</td>
                                            <td className='show1 shane'>${knife.price}</td>
                                            <td className='show1 shane'>{knife.steel}</td>
                                            <td className='show1 shane'>{knife.handleMaterial}</td>
                                            <td className='show1 shane'>{knife.bladeShape}</td>
                                            <td className='show2 shane forSaleMargins'>
                                                <checkbox>
                                                    <div class="checkbox-example checkMargins">
                                                        <input type="checkbox" value="1" id="checkboxOneInput" />
                                                        <label for="checkboxOneInput"></label>
                                                    </div>
                                                </checkbox>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table >
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
        <>
            <div className='dashboard'>
                <SignOut />
                <div className='column1'>
                    <h1 className='loginPageTitle'>BladeX</h1>
                    <div className='dateStyling2'>
                        <CurrentDate date={Date()} />
                    </div>
                    <h3 className='dashboardTitle'>Dashboard</h3>
                </div>
                <p className='costOfcollection'>Cost of Collection:  </p>
                <p className='costOfCollectNum'>$59.99</p>
                <Table className='tableStyling' />
            </div>
            <Title>My Blades</Title>
            <br></br>
            <table className='container tableMargins tableHeader'>
                <tbody>
                    <tr>
                        <td className=''>Brand</td>
                        <td className=''>Model</td>
                        <td className=''>Price</td>
                        <td className=''>Steel</td>
                        <td className=''>Handle</td>
                        <td className=''>Blade</td>
                        <td className='margin1'>For Sale</td>
                    </tr>
                </tbody>
            </table>
            {!noKnives && <MyKnives />}
            {noKnives && <h3>{noKnives}</h3>}
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
    padding-top: 20px;
    font-size: 30px;
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
