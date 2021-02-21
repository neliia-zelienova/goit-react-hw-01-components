import React from 'react';
import styles from './ProfileStatItem.module.css';

const StatItem = ({ name, number }) => ( 
    <li className={styles.item}>
        <span className={styles.label}>{ name.charAt(0).toUpperCase() + name.slice(1) }</span>
        <span className={styles.quantity}>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
    </li>
);

export default StatItem;
   