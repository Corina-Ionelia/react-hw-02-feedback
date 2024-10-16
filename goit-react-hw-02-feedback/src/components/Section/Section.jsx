import React from 'react';
import styles from './section.module.css';

function Section({ title, children }) {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
