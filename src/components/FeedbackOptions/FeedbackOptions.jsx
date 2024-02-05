import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  background-color: #7a8819;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;
  &:hover {
    background-color: #5a6e12;
  }
  &:active {
    transform: scale(0.95);
  }
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;
`;

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
