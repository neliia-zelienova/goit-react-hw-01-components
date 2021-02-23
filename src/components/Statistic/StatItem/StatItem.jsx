import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatItem.module.css';

function getRandomColor() {
    const colorArr = [];
    for (let i = 0; i < 3; ++i) {
        colorArr.push(Math.floor(Math.random() * Math.floor(255)));
    }
    return `rgb(${colorArr})`;
}

function StatItem({ label, percentage }) {
    return (
        <li
            className={styles.item}
            style={{ backgroundColor: getRandomColor() }}
        >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{`${percentage}%`}</span>
        </li>
    );
}


StatItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatItem;
