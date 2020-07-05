import React, { } from 'react';
import Dropdown from './dropDown';

const Table = () => {
    return (
        <div>
            <table className='dashboardTableStyling'>
                <tbody>
                    <tr><td className='border'><Dropdown /></td>
                        <td className='border'>For Sale</td>
                        <td className='border'>EDC Rotation</td>
                        <td className='border'>Wish List</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;