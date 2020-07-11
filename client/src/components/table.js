import React, { } from 'react';
import Dropdown from './dropDown';
import { Link } from "react-router-dom";


const Table = () => {
    return (
        <div>
            <table className='dashboardTableStyling'>
                <tbody>
                    <tr><td className='border'><Dropdown /></td>
                        <td className='border'><Link className='dashboardLinkStyling' to='forSale'>For Sale</Link></td>
                        <td className='border'><Link className='dashboardLinkStyling' to='edcRotation'>EDC Rotation</Link></td>
                        <td className='border'><Link className='dashboardLinkStyling' to='wishList'>Wish List</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
