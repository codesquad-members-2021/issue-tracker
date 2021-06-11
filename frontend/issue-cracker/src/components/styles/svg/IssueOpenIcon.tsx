import React from 'react';
import styled from 'styled-components';

interface IssueOpenIconProps {
  color: string;
  style: StyleProps;
}

interface StyleProps {
  width: number;
  height: number;
}

const IssueOpenIcon = ({ color, style }: IssueOpenIconProps): JSX.Element => (
  <IssueOpenIconStyle {...{ color, style }}>
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 5.33334V8.00001"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10.6667H8.00667"
          strokeWidth="2"
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
  </IssueOpenIconStyle>
);

export default IssueOpenIcon;

const IssueOpenIconStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 4px;

  svg {
    stroke: ${({ color }) => `${color}`};
    width: ${({ style }) => `${style?.width}px`};
    height: ${({ style }) => `${style?.height}px`};
  }
`;
