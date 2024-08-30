import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => ( <
    div className = { styles.statistics } >
    <
    p className = { styles.statItem } > Good: { good } < /p> <
    p className = { styles.statItem } > Neutral: { neutral } < /p> <
    p className = { styles.statItem } > Bad: { bad } < /p> <
    p className = { styles.total } > Total: { total } < /p> <
    p className = { styles.positivePercentage } >
    Positive feedback: { positivePercentage } %
    <
    /p> <
    /div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;