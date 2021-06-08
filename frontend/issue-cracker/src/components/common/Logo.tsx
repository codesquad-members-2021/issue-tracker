import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Prop {
  type: string;
  name?: string;
}
//function : 아예 안써도 됨
//const logo => : FuncitonComponent  , FC
const Logo: FunctionComponent<Prop> = ({ type, name }: Prop) => {
  return <LogoDiv type={type}>{name}</LogoDiv>;
};

const LogoDiv = styled.div<Prop>`
  /* color: ${({ theme }) => theme.colors.black}; */
  font-size: ${({ type }) => (type === 'large' ? '56px' : '32px')};

  font-weight: 400;
`;
export default Logo;
