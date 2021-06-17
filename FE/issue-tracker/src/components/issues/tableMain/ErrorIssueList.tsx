import { useState } from 'react';
import styled from 'styled-components';

type errorMsg = {
  children: string;
};

function ErrorIssueList({ children }: errorMsg) {
  const [time, setTime] = useState(3000);
  const text = `이 창은 ${time / 1000}초 후에 자동으로 사라집니다.`;

  setTimeout(() => setTime(0), time);
  return (
    <ErrorWrap time={time}>
      {children}
      <span>{text}</span>
    </ErrorWrap>
  );
}

export default ErrorIssueList;

type seconds = {
  time: number;
};

const ErrorWrap = styled.div<seconds>`
  position: absolute;
  display: ${({ time }) => (time ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #313030dc;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 200px;
  transform: translate3d(-50%, -50%, 0);
  color: ${({ theme }) => theme.colors.gr_offWhite};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  border-radius: 16px;

  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
