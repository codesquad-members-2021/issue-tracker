import React from 'react';
import styled from 'styled-components';

interface Props {
  [key: string]: boolean | React.ReactNode;
}

const Buttons: React.FC<Props> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.div<Props>`
  border-radius: 20px;
  font-weight: bold;
  ${props => props.theme.alignCenter}
  ${props =>
    props.large &&
    `
  width: 340px;
  height: 64px;
  padding: 0px 24px;`}
  ${props =>
    props.medium &&
    `
  width: 240px;
  height: 56px;
`}
  ${props =>
    props.small &&
    `
  width: 120px;
  height: 40px;
  padding: 0px 16px;
`}
  /* ${props =>
    props.mediumText &&
    `
  width: 87px;
  height: 32px;
`}
  ${props =>
    props.smallText &&
    `
  width: 70px;
  height: 32px;
`} */

  background-color: ${props => {
    if (props.initial || props.focus || props.disabled)
      return props.theme.colors.primary;
    else if (props.hover) return props.theme.colors.darkBlue;
  }};
  border: ${props => {
    if (props.focus) return `4px solid ${props.theme.colors.lightBlue}`;
  }};
  opacity: ${props => {
    if (props.disabled) return 0.5;
  }};
`;

export default Buttons;
