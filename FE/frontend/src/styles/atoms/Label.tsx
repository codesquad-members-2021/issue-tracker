import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  color: string;
}

const Label = (props: Props) => {
  return (
    <LabelWrapper color={props.color}>
      <Title> {props.title}</Title>
    </LabelWrapper>
  );
};

const LabelWrapper = styled.div<{ color: string }>`
  ${props => props.theme.alignCenter}
  height: 28px;
  background: ${props => props.color};
  border-radius: 30px;
`;

const Title = styled.div`
  width: auto;
  padding: 0 10px;
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => props.theme.greyscale.offWhite};
`;
export default Label;
