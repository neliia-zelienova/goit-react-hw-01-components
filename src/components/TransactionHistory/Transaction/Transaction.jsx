import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

function Transaction({ type, amount, currency }) {
  return (
    <tr className={styles.row}>
      <td className={styles.type}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </td>
      <td className={styles.amount}>{amount}</td>
      <td className={styles.currency}>{currency}</td>
    </tr>
  );
}
Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
