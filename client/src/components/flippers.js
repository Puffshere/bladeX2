import CurrentDate from '../components/currentDate';
import SignOut from '../components/signOut';
import Table from '../components/table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Flippers() {

  const [knives, setKnives] = useState([]);
  const [noKnives, setNoKnives] = useState('');

  useEffect(() => {
    const knivesRequest = {
      userId: '5f0587584f6e92c4ce549a24'
    }
    axios.post('https://bladexapp.herokuapp.com/api/getKnives', knivesRequest).then(res => {
      if (res.data.knives.length < 0) {
        setNoKnives('You need to go buy some knives.');
      }
      setKnives(res.data.knives);
    })
  })

  const flippersTrue = knives.filter(i => i.flippers === true);
  const renderFlippers = flippersTrue.map((i) =>

    <table className='container tableBackground showStopper'>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td className='show1 shane'>{i.brand}</td>
          <td className='show1 shane'>{i.model}</td>
          <td className='show1 shane'>{i.bladeShape}</td>
          <td className='show1 shane'>{i.handleMaterial}</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div className='dashboard'>
      <SignOut />
      <div className='column1'>
        <h1 className='loginPageTitle'>BladeX</h1>
        <div className='dateStyling'>
          <CurrentDate date={Date()} />
        </div>
        <h3 className='dashboardTitle2'>Flippers</h3>
      </div>
      <Table className='tableStyling' />
      <center><h2 className='allKnivesStyling'>Flippers:</h2></center>
      <br></br>
      <table className='container tableMargins tableHeader'>
        <tbody>
          <tr>
            <td className=''>Brand</td>
            <td className=''>Model</td>
            <td className=''>Blade</td>
            <td className=''>Handle</td>
          </tr>
        </tbody>
      </table>
      {renderFlippers}
    </div>
  );
}

export default Flippers;
