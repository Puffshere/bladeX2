// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


//     const [knives, setKnives] = useState([]);
//     const [noKnives, setNoKnives] = useState('');

//     useEffect(() => {
//         const knivesRequest = {
//             userId: '5f010508c7531138565af6ff'
//         }
//         axios.post('https://bladexapp.herokuapp.com/api/getKnives', knivesRequest).then(res => {
//             if (res.data.knives.length < 0) {
//                 setNoKnives('You need to go buy some knives.');
//             }
//             setKnives(res.data.knives);
//         })
//     })

//     const MyKnives = () => {
//         if (knives.length > 0) {
//             return (
//                 <div>
//                     {knives.map(knife => {
//                         return (
//                             <div>
//                                 <Link className='dashboardLinkStyling mainDropStyling' to='bladeDetails'><table className='container tableMargins tableBackground showStopper'>
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
//                                 </Link>
//                             </div>
//                         )
//                     })}
//                 </div>
//             )
//         } else {
//             return (
//                 <h4>Loading...</h4>
//             )
//         }
//     }

//     export default MyKnives;