import { Component } from 'react';
import { Wrapper } from './Wrapper/Wrapper';
import { Title } from './Title/Title';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = good + neutral + bad;
    const positiveFeedbackPercentage = totalFeedback
      ? Math.round((good / totalFeedback) * 100)
      : 0;
    return (
      <Wrapper>
        <Title>GoIT React Woolf HW-02 "Feedback"</Title>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              onLeaveFeedback={this.addFeedback}
              options={options}
            />
          }
        />
        <Section
          title="Statistics"
          children={
            totalFeedback ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                totalFeedback={totalFeedback}
                positiveFeedbackPercentage={positiveFeedbackPercentage}
              />
            ) : (
              <Notification message={'There is no feedback'} />
            )
          }
        />
      </Wrapper>
    );
  }
}
