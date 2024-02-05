import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  text-align: center;
  border: 1px solid #7a8819;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  font-size: 30px;
`;

export const Section = ({ title, children }) => (
  <Div>
    <H2>{title}</H2>
    {children}
  </Div>
);
