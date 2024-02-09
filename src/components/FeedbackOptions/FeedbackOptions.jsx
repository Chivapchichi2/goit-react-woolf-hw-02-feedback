import { Button, Ul } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <Ul>
    {options.map(option => (
      <li key={option}>
        <Button onClick={() => onLeaveFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </Button>
      </li>
    ))}
  </Ul>
);
