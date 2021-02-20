import React from 'react';
import StatItem from './StatItem';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
    return (<section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            {stats.map(stat => <StatItem key={stat.id} label={stat.label} percentage={stat.percentage} />)}
        </ul>
    </section>)
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })).isRequired
};


export default Statistics;