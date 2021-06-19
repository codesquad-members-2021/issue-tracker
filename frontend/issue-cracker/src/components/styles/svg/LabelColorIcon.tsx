import React from 'react';
import styled from 'styled-components';
interface LabelColorIconProps {
  color: string;
}
const LabelColorIcon = ({ color }: LabelColorIconProps): JSX.Element => {
  return (
    <LabelColorIconStyle {...{ color }}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="9.5" stroke="#D9DBE9" />
      </svg>
    </LabelColorIconStyle>
  );
};

export default LabelColorIcon;

const LabelColorIconStyle = styled.div`
  display: flex;
  align-items: center;
  svg {
    fill: ${({ color }) => `${color}`};
  }
`;
