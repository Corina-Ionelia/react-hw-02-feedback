// src/App.js
import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

const App = () => {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

    const handleLeaveFeedback = (type) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [type]: prevFeedback[type] + 1,
        }));
    };

    const countTotalFeedback = () => {
        return feedback.good + feedback.neutral + feedback.bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return countTotalFeedback() ? Math.round((feedback.good / countTotalFeedback()) * 100) : 0;
    };

    return ( <
        div >
        <
        Section title = "Please leave feedback" >
        <
        FeedbackOptions options = {
            ['good', 'neutral', 'bad'] }
        onLeaveFeedback = { handleLeaveFeedback }
        /> <
        /Section>

        <
        Section title = "Statistics" > {
            countTotalFeedback() > 0 ? ( <
                Statistics good = { feedback.good }
                neutral = { feedback.neutral }
                bad = { feedback.bad }
                total = { countTotalFeedback() }
                positivePercentage = { countPositiveFeedbackPercentage() }
                />
            ) : ( <
                Notification message = "There is no feedback" / >
            )
        } <
        /Section> <
        /div>
    );
};

export default App;