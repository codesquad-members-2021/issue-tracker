import React from 'react';
import styled from 'styled-components';
interface Props {
  title: string;
  color: string;
}

const Label = (props: Props) => {
  return <LabelWrapper color={props.color}>{props.title}</LabelWrapper>;
};

const LabelWrapper = styled.div<{ color: string }>`
  ${props => props.theme.alignCenter}
  padding: 0px 16px;

  background: ${props => props.color};
  border-radius: 30px;
`;
export default Label;
