import styled from 'styled-components';
import { Button, Checkbox } from '@material-ui/core';
import { ReactComponent as Open } from 'icons/openIssue.svg';
import { ReactComponent as Close } from 'icons/closeIssue.svg';
import Filter from 'components/common/Filter';
import { useRecoilValue, useRecoilState } from 'recoil';
import { issuesStateAtom, totalCountOfIssue } from 'stores/issueStore';
import { MouseEvent } from 'react';

const IssuesHeader = () => {
  const IssueCount = useRecoilValue(totalCountOfIssue);
  const [issuesState, setIssuesState] = useRecoilState(issuesStateAtom);
  const clickOpenHandler = (e: MouseEvent) => {
    setIssuesState(false);
  };
  const clickCloseHandler = (e: MouseEvent) => {
    setIssuesState(true);
  };
  return (
    <StyledIssuesHeader>
      <IssuesHeaderLeft>
        <Checkbox color="primary" />
        <IssuesButton aria-checked={!issuesState} onClick={clickOpenHandler}>
          <OpenSvg /> 열린 이슈({IssueCount.open})
        </IssuesButton>
        <IssuesButton aria-checked={issuesState} onClick={clickCloseHandler}>
          <CloseSvg />
          닫힌 이슈({IssueCount.close})
        </IssuesButton>
      </IssuesHeaderLeft>
      <IssuesHeaderRight>
        <Filter filterType="assigneeList" />
        <Filter filterType="labelList" />
        <Filter filterType="milestoneList" />
        <Filter filterType="authorList" />
      </IssuesHeaderRight>
    </StyledIssuesHeader>
  );
};

export default IssuesHeader;

const IssuesButton = styled(Button)`
  color: ${({ theme }) => theme.color.grayscale.label};
  stroke: ${({ theme }) => theme.color.grayscale.label};

  &[aria-checked='true'] {
    font-weight: 700;
    stroke: ${({ theme }) => theme.color.grayscale.titleActive};
    color: ${({ theme }) => theme.color.grayscale.titleActive};
  }
`;

const StyledIssuesHeader = styled.div`
  ${({ theme }) => theme.style.flexSpaceBetween}
  box-sizing: border-box;

  padding: 1rem;
`;

const OpenSvg = styled(Open)`
  path {
    stroke: inherit;
  }
  margin-right: 0.2rem;
`;
const CloseSvg = styled(Close)`
  path {
    stroke: inherit;
  }
  margin-right: 0.2rem;
`;

const IssuesHeaderLeft = styled.div``;
const IssuesHeaderRight = styled.div``;
