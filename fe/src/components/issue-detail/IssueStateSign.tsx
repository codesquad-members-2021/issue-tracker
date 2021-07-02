import styled from 'styled-components';
import { ReactComponent as Open } from 'icons/openIssue.svg';
import { ReactComponent as Close } from 'icons/closeIssue.svg';

type IssueStateSignPropsType = {
  isOpened: boolean;
};

const IssueStateSign = ({ isOpened }: IssueStateSignPropsType) => (
  <Div isOpened={isOpened}>
    {isOpened ? (
      <>
        <OpenSvg />
        <span>열린 이슈</span>
      </>
    ) : (
      <>
        <CloseSvg />
        <span>닫힌 이슈</span>
      </>
    )}
  </Div>
);

const Div = styled.div<IssueStateSignPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.S};
  width: 6.25rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.border.radius.XL};
  border: 1px solid
    ${({ isOpened, theme }) =>
      isOpened ? theme.color.blue : theme.color.purple};
  color: ${({ isOpened, theme }) =>
    isOpened ? theme.color.blue : theme.color.purple};
  background-color: ${({ isOpened, theme }) =>
    isOpened ? theme.color.lightBlue : theme.color.lightPurple};

  span {
    margin-left: 0.2rem;
  }
`;

const OpenSvg = styled(Open)`
  path {
    stroke: ${({ theme }) => theme.color.blue};
    fill: ${({ theme }) => theme.color.lightBlue};
  }
  margin-right: 0.2rem;
`;

const CloseSvg = styled(Close)`
  path {
    stroke: ${({ theme }) => theme.color.purple};
    fill: ${({ theme }) => theme.color.lightPurple};
  }
  margin-right: 0.2rem;
`;

export default IssueStateSign;
