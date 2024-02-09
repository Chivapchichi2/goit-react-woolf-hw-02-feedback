import { Div, H2 } from './SectionStyled';

export const Section = ({ title, children }) => (
  <Div>
    <H2>{title}</H2>
    {children}
  </Div>
);
