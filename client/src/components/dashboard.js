import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import './style.css';
import Table from './table';
import SignOut from './signOut';
import CurrentDate from './currentDate';
import KnifeImage from './knifeImage';
import NameLoggedIn from './nameLoggedIn';


function Dashboard() {

    const [knives, setKnives] = useState([]);
    const [noKnives, setNoKnives] = useState('');


    const [state, setState] = useState({
        forSale: false,
    })

    useEffect(() => {
        const knivesRequest = {
            userId: '5f0587584f6e92c4ce549a24'
        }
        axios.post('https://blade-x.herokuapp.com/api/getKnives', knivesRequest).then(res => {
            if (res.data.knives.length < 0) {
                setNoKnives('You need to go buy some knives.');
            }
            setKnives(res.data.knives);
        })
    })

    const handleSubmit = () => {
        axios
            .post('/api/addForSale', state)
            .then(res => {
                console.log('successfully added new knife for sale!')
            })
            .catch(err => console.log(err, 'failed to add new knife for sale'));
        setState({
            forSale: state
        })
    }

    const onChange = () => {
        setState({
            ...state,
            forSale: !state.forSale
        });
    };

    // const MyKnives = () => {
    //     if (knives.length > 0) {
    //         return (
    //             <div>
    //                 {knives.map(knife => {
    //                     return (
    //                         <div>
    //                             <Link className='dashboardLinkStyling mainDropStyling' to='bladeDetails'>
    //                                 <table className='container tableMargins tableBackground showStopper'>
    //                                     <tbody>
    //                                         <tr>
    //                                             <td className='show1 shane'>{knife.brand}</td>
    //                                             <td className='show1 shane'>{knife.model}</td>
    //                                             <td className='show1 shane'>${knife.price}</td>
    //                                             <td className='show1 shane'>{knife.steel}</td>
    //                                             <td className='show1 shane'>{knife.handleMaterial}</td>
    //                                             <td className='show1 shane'>{knife.bladeShape}</td>
    //                                             <td className='show2 shane forSaleMargins'>
    //                                                 <checkbox>
    //                                                     <div class="checkbox-example checkMargins">
    //                                                         <input type="checkbox" value="1" id="checkboxOneInput" />
    //                                                         <label for="checkboxOneInput"></label>
    //                                                     </div>
    //                                                 </checkbox>
    //                                             </td>
    //                                         </tr>
    //                                     </tbody>
    //                                 </table >
    //                             </Link>
    //                         </div>
    //                     )
    //                 })}
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <h4>Loading...</h4>
    //         )
    //     }
    // }
    //   const thumbStudTrue = knives.filter(i => i.thumbStud === true);

    const MyKnives = knives.map((i) =>
        <table className='container tableBackground showStopper'>
            <thead>
            </thead>
            <tbody>
                <tr>
                    <Link className='linkMargins' to='bladeDetails'>
                        <td className='show1 dMargins'>{i.brand}</td>
                        <td className='show1 dMargins'>{i.model}</td>
                        <td className='show1 dMargins'>{i.price}</td>
                        <td className='show1 dMargins'>{i.steel}</td>
                        <td className='show1 dMargins'>{i.handleMaterial}</td>
                        <td className='show1 dMargins'>{i.bladeShape}</td>
                    </Link>
                    <td className='show2'>
                        <checkbox>
                            <div className="checkbox-example checkMargins">
                                <input type="checkbox"
                                    key={i._id}
                                    checked={i.forSale}
                                    id="checkboxOneInput"
                                    onChange={() => onChange()}
                                    onClick={() => handleSubmit()}>
                                </input>
                                <label for="checkboxOneInput"></label>
                            </div>
                        </checkbox>
                    </td>
                </tr>
            </tbody>
        </table>
    );

    return (
        <>
            <div className='dashboard'>
                <KnifeImage />
                <SignOut />
                <NameLoggedIn />
                <div className='column1'>
                    <h1 className='loginPageTitle'>BladeX</h1>
                    <div className='dateStyling2'>
                        <CurrentDate date={Date()} />
                    </div>
                    <h3 className='dashboardTitle'>Dashboard</h3>
                </div>
                <p className='costOfcollection'>Cost of Collection:  </p>
                <p className='costOfCollectNum'>$109.99</p>
                <Table className='tableStyling' />
            </div>
            <Title>My Blades</Title>
            <br></br>
            <table className='container tableMargins tableHeader'>
                <tbody>
                    <tr>
                        <td className='brandMargins'>Brand</td>
                        <td className=''>Model</td>
                        <td className=''>Price</td>
                        <td className=''>Steel</td>
                        <td className='handleStyling'>Handle</td>
                        <td className=''>Blade</td>
                        <td className=''>Sale</td>
                    </tr>
                </tbody>
            </table>
            {MyKnives}
            <br></br>
            <br></br>
            <br></br>
            {/* <button onClick={() => handleSubmit()}>Update Collection</button>  */}
            <br></br>
            <br></br>
            <br></br>
            <footer>
                <div className='linkStyling1'>
                    <ul>
                        <li className='aboutStyling'><Link to="/about">About</Link></li>
                        <li className='contactStyling'><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </footer>

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
