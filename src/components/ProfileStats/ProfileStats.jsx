import React from 'react';
import StatItem from '../ProfileStatItem/ProfileStatItem';
import styles from './ProfileStats.module.css';

function Stats({ stats }) {
    const statsItems = Object.keys(stats).map((key) => ({name: key, number: stats[key]}));
    return (
        <ul className={styles.stats}>
            {statsItems.map(stat => <StatItem key={stat.name} name={stat.name} number={stat.number} />)}
        </ul>
    )

};

export default Stats;
