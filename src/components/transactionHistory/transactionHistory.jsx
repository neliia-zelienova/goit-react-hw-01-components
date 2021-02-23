import React from 'react';
import Transaction from './Transaction/Transaction';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ transactions }) {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.transaction_history}>
                <thead>
                    <tr>
                        <th className={styles.th}>TYPE</th>
                        <th className={styles.th}>AMOUNT</th>
                        <th className={styles.th}>CURRENCY</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <Transaction
                            key={transaction.id}
                            type={transaction.type}
                            amount={transaction.amount}
                            currency={transaction.currency}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        }),
    ).isRequired,
};

export default TransactionHistory;
