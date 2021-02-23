import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatItem.module.css';

const StatItem = ({ name, number }) => (
    <li className={styles.item}>
        <span className={styles.label}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </span>
        <span className={styles.quantity}>
            {number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>
    </li>
);

StatItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default StatItem;
