import React from 'react';
import Transaction from './transaction';

function TransactionHistory({ transactions }) {
    return (<table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
            <tbody>
            {transactions.map(transaction => <Transaction key={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency}/>)}
            </tbody>
        </table>);
};
export default TransactionHistory;