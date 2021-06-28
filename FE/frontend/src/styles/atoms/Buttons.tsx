import React from 'react';
import styled from 'styled-components';

interface Props {
  [key: string]: boolean | React.ReactNode;
}

const Buttons = ({ children, ...props }: Props) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.div<Props>`
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  color: ${props => {
    if (props.detail) return props.theme.colors.primary;
    return props.theme.greyscale.offWhite;
  }};
  pointer-events: ${props => {
    if (props.disabled) return 'none';
  }};

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
  border-radius: 11px;
`}

  background-color: ${props => {
    if (props.initial || props.focus || props.disabled)
      return props.theme.colors.primary;
    return props.theme.greyscale.offWhite;
  }};
  border: ${props => {
    if (props.detail) return `2px solid ${props.theme.colors.primary}`;
  }};
  opacity: ${props => {
    if (props.disabled) return 0.5;
  }};

  &:hover {
    background-color: ${props => props.theme.colors.darkBlue};
    color: ${props => props.theme.greyscale.offWhite};
  }

  &:focus {
    background-color: ${props => props.theme.colors.primary};
    border: ${props => `4px solid ${props.theme.colors.lightBlue}`};
  }
`;

export default Buttons;
