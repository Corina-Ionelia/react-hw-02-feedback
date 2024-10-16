import React from 'react';
import styles from './notification.module.css';

function Notification({ message }) {
  return <p className={styles.message}>{message}</p>;
}

export default Notification;
