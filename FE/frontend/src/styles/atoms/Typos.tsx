import React from 'react';
import styled from 'styled-components';

interface Props {
  [key: string]: boolean | React.ReactNode;
}

const Typos = ({ children, ...props }: Props) => {
  return <TypoWrapper {...props}>{children}</TypoWrapper>;
};

const TypoWrapper = styled.div<Props>`
  display: block;
  font-size: ${props => {
    if (props.lg) return props.theme.fontSize.lg;
    else if (props.md) return props.theme.fontSize.md;
    else if (props.sm) return props.theme.fontSize.sm;
    else if (props.xs) return props.theme.fontSize.xs;
  }};
  font-weight: ${props => {
    if (props.link) return 'bold';
  }};
  cursor: ${props => {
    if (props.link) return 'pointer';
  }};
  color: ${props => props.theme.greyscale.body};
`;

export default Typos;
