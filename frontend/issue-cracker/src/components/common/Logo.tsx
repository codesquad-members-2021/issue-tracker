import React, { FC } from 'react';
import styled from 'styled-components';

interface Prop {
  type: string;
  name?: string;
}
//function : 아예 안써도 됨
//const logo => : FuncitonComponent  , FC
const Logo: FC<Prop> = ({ type, name }: Prop) => {
  return <LogoDiv type={type}>{name}</LogoDiv>;
};

const LogoDiv = styled.div<Prop>`
  font-size: ${({ type }) => (type === 'large' ? '56px' : '32px')};
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
`;
export default Logo;
