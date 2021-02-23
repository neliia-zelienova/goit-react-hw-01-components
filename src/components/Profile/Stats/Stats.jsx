import React from 'react';
import PropTypes from 'prop-types';
import StatItem from '../StatItem/StatItem';
import styles from './Stats.module.css';

function Stats({ stats }) {
    const statsItems = Object.keys(stats).map(key => ({
        name: key,
        number: stats[key],
    }));
    return (
        <ul className={styles.stats}>
            {statsItems.map(stat => (
                <StatItem
                    key={stat.name}
                    name={stat.name}
                    number={stat.number}
                />
            ))}
        </ul>
    );
}

Stats.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),
};

export default Stats;
