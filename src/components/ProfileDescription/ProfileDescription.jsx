import React from 'react';
import styles from './ProfileDescription.module.css';

function Description({ avatar, name, tag, location }) {
  return (<div className={styles.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={styles.avatar}
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>{`@${tag}`}</p>
    <p className={styles.location}>{location}</p>
  </div>)
};

export default Description;
