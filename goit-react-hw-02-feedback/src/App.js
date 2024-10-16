import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleLeaveFeedback = option => {
        switch (option) {
            case 'good':
                setGood(prev => prev + 1);
                break;
            case 'neutral':
                setNeutral(prev => prev + 1);
                break;
            case 'bad':
                setBad(prev => prev + 1);
                break;
            default:
                break;
        }
    };

    const countTotalFeedback = () => good + neutral + bad;

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        return total ? Math.round((good / total) * 100) : 0;
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
            countTotalFeedback() ? ( <
                Statistics good = { good }
                neutral = { neutral }
                bad = { bad }
                total = { countTotalFeedback() }
                positivePercentage = { countPositiveFeedbackPercentage() }
                />
            ) : ( <
                Notification message = "There is no feedback yet" / >
            )
        } <
        /Section> <
        /div>
    );
};

export default App;