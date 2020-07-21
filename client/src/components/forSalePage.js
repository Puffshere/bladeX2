import CurrentDate from '../components/currentDate';
import SignOut from '../components/signOut';
import Table from '../components/table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KnifeImage from './knifeImage';


function ForSalePage() {
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

  const forSaleTrue = knives.filter(i => i.forSale === true);
  const renderForSale = forSaleTrue.map((i) =>

    <table className='container tableBackground showStopper'>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td className='maroon c'>{i.brand}</td>
          <td className='maroon c'>{i.model}</td>
          <td className='maroon c'>${i.forSalePrice}</td>
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
        <h3 className='dashboardTitle2'>ForSale</h3>
      </div>
      <p className='costOfcollection'>Amount for Sale:  </p>
      <p className='costOfCollectNum'>$99.99</p>
      <Table className='tableStyling' />
      <center><h2 className='allKnivesStyling'>Knives for Sale:</h2></center>
      <br></br>
      <table className='container tableMargins tableHeader'>
        <tbody>
          <tr>
            <td className='c'>Brand</td>
            <td className='c'>Model</td>
            <td className='c'>Price</td>
          </tr>
        </tbody>
      </table>
      {renderForSale}
    </div>
  );
}

export default ForSalePage;
