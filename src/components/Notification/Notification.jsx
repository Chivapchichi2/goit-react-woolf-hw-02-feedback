import styled from 'styled-components';

const P = styled.p`
  font-size: 20px;
  color: #c90e15;
`;
export const Notification = ({ message }) => <P>{message}</P>;
