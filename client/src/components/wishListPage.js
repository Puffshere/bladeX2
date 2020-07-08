import React, { } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../components/dropDown';

const CurrentDate = (props) => {
  var tempDate = new Date();
  var date = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
  const currDate = date;
  return (
    <div>
      <p className='dateStyling'>{currDate}</p>
    </div>
  );
};

const SignOut = (props) => {
  return (
    <Link to='login' className='signOutStyling'>
      Sign Out
    </Link>
  )
}

const Table = () => {
  return (
    <div>
      <table className='dashboardTableStyling'>
        <tbody>
          <tr><td className='border'><Dropdown /></td>
            <td className='border'><Link className='dashboardLinkStyling' to='forSale'>For Sale</Link></td>
            <td className='border'><Link className='dashboardLinkStyling' to='edcRotation'>EDC Rotation</Link></td>
            <td className='border'><Link className='dashboardLinkStyling' to='wishList'>Wish List</Link></td></tr>
        </tbody>
      </table>
    </div>
  )
}

class WishList extends React.Component {
  state = {
    blades: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/blades?access_token=5e3600914e63efce06c8cee3')
      .then(res => res.json())
      .then((data) => {
        this.setState({ blades: data })
      })
      .catch(console.log)
  }

  render() {

    const wishListtrue = this.state.blades.filter(i => i.wishList === true);
    const renderWishList = wishListtrue.map((i) =>

      <table className='container tableBackground showStopper'>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td className='show1 shane'>{i.brand}</td>
            <td className='show1 shane'>{i.model}</td>
            <td className='show1 shane'>{i.bladeShape}</td>
            <td className='show1 shane'>{i.handleMaterial}</td>
            <td className='show1 shane'>${i.price}</td>
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
          <h3 className='dashboardTitle1'>WishList</h3>
        </div>
        <Table className='tableStyling' />
        <center><h2 className='allKnivesStyling'>Wish List:</h2></center>
        <table className='container showStopper nice'>
          <tbody>
            <tr>
              <td className=''>Brand</td>
              <td className=''>Model</td>
              <td className=''>Shape</td>
              <td className=''>Handle</td>
              <td className=''>Price</td>
            </tr>
          </tbody>
        </table>
        {renderWishList}
      </div>
    );
  }
};

export default WishList;
