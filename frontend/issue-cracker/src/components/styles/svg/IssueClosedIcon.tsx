import React from 'react';
import styled from 'styled-components';

interface IssueClosedIconProps {
  color: string;
  fontSize: number;
}

const IssueOpenIcon = ({
  color,
  fontSize,
}: IssueClosedIconProps): JSX.Element => (
  <IssueClosedIconStyle {...{ color, fontSize }}>
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M14 5.33334V14H2V5.33334"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3334 2H0.666748V5.33333H15.3334V2Z"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66675 8H9.33341"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </IssueClosedIconStyle>
);

export default IssueOpenIcon;

const IssueClosedIconStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 8px;

  svg {
    stroke: ${({ color }) => `${color}`};
    width: 20px;
    height: 20px;
  }
`;
