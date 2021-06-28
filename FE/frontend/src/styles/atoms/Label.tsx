import React from 'react';
import styled from 'styled-components';

interface Props {
  title?: string;
  background?: string | null;
  color?: { [key: string]: boolean };
}

const Label = (props: Props) => {
  const isBright = () => {
    if (props.background) {
      const hex = props.background.replace('#', '');
      const c_r = parseInt(hex.substr(0, 2), 16);
      const c_g = parseInt(hex.substr(2, 2), 16);
      const c_b = parseInt(hex.substr(4, 2), 16);
      const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
      return brightness > 155;
    }
    return false;
  };

  return (
    <LabelWrapper background={props.background ? props.background : '#EFF0F6'}>
      <Title isColor={isBright()}>
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

const Title = styled.div<{
  isColor: boolean;
}>`
  width: auto;
  padding: 0 20px;
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => {
    if (props?.isColor) {
      return props.theme.greyscale.body;
    }
    return props.theme.greyscale.offWhite;
  }};
`;
export default Label;
