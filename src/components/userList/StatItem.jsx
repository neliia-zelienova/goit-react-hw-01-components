import React from 'react';

const StatItem = ({ name, number }) => ( 
    <li>
        <span className="label">{name}</span>
        <span className="quantity">{number}</span>
    </li>
);

export default StatItem;
   