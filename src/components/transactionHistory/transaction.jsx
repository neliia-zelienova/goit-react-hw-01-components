import React from 'react';

function Transaction({type, amount, currency}) {
    return (
         <tr>
            <td className="type">{type}</td>
            <td className="amount">{amount}</td>
            <td className="currency">{currency}</td>
        </tr>
    );
}
    
export default Transaction;