import React from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown">
        <div className='dropdownStyling' onClick={this.showDropdownMenu}>Your Knives</div>

        {this.state.displayMenu ? (
          <div className='help1'>
            <ul>
              <a href="dashboard" className='mainDropStyling dashboardLinkStyling'><li className='help'>Dashboard</li></a>
              <a href="fixedBlades" className='mainDropStyling dashboardLinkStyling'><li className='help'>Fixed Blades</li></a>
              <a href="slipJoints" className='mainDropStyling dashboardLinkStyling'><li className='help'>Slip Joints</li></a>
              <a href="flippers" className='mainDropStyling dashboardLinkStyling'><li className='help'>Flippers</li></a>
              <a href="automatics" className='mainDropStyling dashboardLinkStyling'><li className='help'>Automatic</li></a>
              <a href="assisted" className='mainDropStyling dashboardLinkStyling'><li className='help'>Assisted</li></a>
              <Link className='dashboardLinkStyling mainDropStyling' to='yourKnives'><li className='help'>Add Knife</li></Link>
            </ul>
          </div>
        ) :
          (
            null
          )
        }
      </div>
    );
  }
}

var displayDropdown = (
  <div>
    <Dropdown />
  </div>
);

ReactDOM.render(displayDropdown, document.getElementById('root'));
export default Dropdown;
