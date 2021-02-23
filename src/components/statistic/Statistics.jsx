import React from 'react';
import StatItem from './StatItem/StatItem';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map(stat => (
                    <StatItem
                        key={stat.id}
                        label={stat.label}
                        percentage={stat.percentage}
                    />
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        }),
    ).isRequired,
};

export default Statistics;
