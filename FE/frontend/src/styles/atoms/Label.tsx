import React from 'react';
import styled from 'styled-components';

interface Props {
  title?: string;
  background?: string;
  color?: string;
}

const Label = (props: Props) => {
  return (
    <LabelWrapper background={props.background ? props.background : '#EFF0F6'}>
      <Title color={props.color ? props.color : '#14142B'}>
        {props.title ? props.title : '레이블 이름'}
      </Title>
    </LabelWrapper>
  );
};

const LabelWrapper = styled.div<{ background: string }>`
  ${props => props.theme.alignCenter}
  height: 28px;
  background: ${props => props.background};
  border-radius: 30px;
`;

const Title = styled.div<{ color: string }>`
  width: auto;
  padding: 0 20px;
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => props.theme.greyscale.titleActive};
`;
export default Label;
