import CurrentDate from '../components/currentDate';
import SignOut from '../components/signOut';
import Table from '../components/table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KnifeImage from './knifeImage';


function Edc() {
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
      setKnives(res.data.knives);
    })
  })

  const thumbEdcTrue = knives.filter(i => i.edc === true);
  const renderEdc = thumbEdcTrue.map((i) =>

    <table className='container tableBackground showStopper'>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td className='maroon c'>{i.brand}</td>
          <td className='maroon c'>{i.model}</td>
          <td className='maroon c'>{i.bladeShape}</td>
          <td className='maroon c'>{i.handleMaterial}</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div className='dashboard'>
      <KnifeImage />
      <SignOut />
      <div className='column1'>
        <h1 className='loginPageTitle'>BladeX</h1>
        <div className='dateStyling'>
          <CurrentDate date={Date()} />
        </div>
        <h3 className='dashboardTitle3'>Edc</h3>
      </div>
      <Table className='tableStyling' />
      <center><h2 className='allKnivesStyling'>Edc:</h2></center>
      <br></br>
      <table className='container tableMargins tableHeader'>
        <tbody>
          <tr>
            <td className='c'>Brand</td>
            <td className='c'>Model</td>
            <td className='c'>Blade</td>
            <td className='c'>Handle</td>
          </tr>
        </tbody>
      </table>
      {renderEdc}
    </div>
  );
}

export default Edc;
