import CurrentDate from '../components/currentDate';
import SignOut from '../components/signOut';
import Table from '../components/table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ForSalePage() {

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

  const forSaleTrue = knives.filter(i => i.forSale === true);
  const renderForSale = forSaleTrue.map((i) =>

    <table className='container tableBackground showStopper'>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td className='show1 shane'>{i.brand}</td>
          <td className='show1 shane'>{i.model}</td>
          <td className='show1 shane'>${i.forSalePrice}</td>
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
        <h3 className='dashboardTitle2'>ForSale</h3>
      </div>
      <p className='costOfcollection'>Amount for Sale:  </p>
      <p className='costOfCollectNum'>$25.00</p>
      <Table className='tableStyling' />
      <center><h2 className='allKnivesStyling'>Knives for Sale:</h2></center>
      <br></br>
      <table className='container tableMargins tableHeader'>
        <tbody>
          <tr>
            <td className=''>Brand</td>
            <td className=''>Model</td>
            <td className=''>Price</td>
          </tr>
        </tbody>
      </table>
      {renderForSale}
    </div>
  );
}

export default ForSalePage;
