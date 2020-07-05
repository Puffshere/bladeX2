import React, { } from 'react';

const CurrentDate = (props) => {
    var tempDate = new Date();
    var date = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
    const currDate = date;
    return (
        <div className='dateStyling'>{currDate}</div>
    );
};

export default CurrentDate;