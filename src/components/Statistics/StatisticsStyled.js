import styled from 'styled-components';

export const Ul = styled.ul`
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
