import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  margin-bottom: 20px;
  & > li {
    margin-left: 20px;
    font-size: 20px;
  }
`;

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <Ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive feedback: {positiveFeedbackPercentage}%</li>
    </Ul>
  );
};
