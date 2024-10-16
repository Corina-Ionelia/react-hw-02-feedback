import React from 'react';
import styles from './statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={styles.statisticsList}>
      <li className={styles.statisticsItem}>Good: {good}</li>
      <li className={styles.statisticsItem}>Neutral: {neutral}</li>
      <li className={styles.statisticsItem}>Bad: {bad}</li>
      <li className={styles.statisticsItem}>Total: {total}</li>
      <li className={styles.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
}

export default Statistics;
