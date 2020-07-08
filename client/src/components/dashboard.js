import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import './style.css';
import Table from './table';
import SignOut from './signOut';
import CurrentDate from './currentDate';
import KnifeImage from './knifeImage';


function Dashboard() {

    const [knives, setKnives] = useState([]);
    const [noKnives, setNoKnives] = useState('');

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

    const MyKnives = () => {
        if (knives.length > 0) {
            return (
                <div>
                    {knives.map(knife => {
                        return (
                            <div>
                                <Link className='dashboardLinkStyling mainDropStyling' to='bladeDetails'><table className='container tableMargins tableBackground showStopper'>
                                    <tbody>
                                        <tr>
                                            <td className='show1 shane leftPad'>{knife.brand}</td>
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
                                </Link>
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
                <KnifeImage />
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
                        <td className=''>Sale</td>
                    </tr>
                </tbody>
            </table>
            {!noKnives && <MyKnives />}
            {noKnives && <h3>{noKnives}</h3>}
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

export default Dashboard;
