import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendCard.module.css';
import noAvatar from './no-avatar.png';

function FriendCard({ avatar, name, isOnline }) {
    return (
        <li className={styles.item}>
            <span
                className={isOnline ? styles.isOnline : styles.isOffline}
            ></span>
            <img className={styles.avatar} src={avatar} alt="" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
}

FriendCard.defaultProps = {
    avatar: noAvatar,
};

FriendCard.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
};

export default FriendCard;
