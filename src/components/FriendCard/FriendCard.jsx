import React from 'react';
import styles from './FriendCard.module.css';

function FriendCard({ avatar, name, isOnline }) {

    return (
        <li className={styles.item}>
            <span className={(isOnline) ? styles.isOnline : styles.isOffline} ></span>
            <img className={styles.avatar} src={avatar} alt="" width="48" />
            <p className={styles.name}>{name}</p>
    </li>
    );

}
export default FriendCard;