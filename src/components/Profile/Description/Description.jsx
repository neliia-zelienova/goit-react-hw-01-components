import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.css';

function Description({ avatar, name, tag, location }) {
    return (
        <div className={styles.description}>
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>{`@${tag}`}</p>
            <p className={styles.location}>{location}</p>
        </div>
    );
}

Description.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
};

export default Description;
