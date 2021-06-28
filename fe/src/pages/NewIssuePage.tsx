import { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';
import { instanceWithAuth } from 'api';
import { useHistory } from 'react-router-dom';

import CustomButton from 'components/buttons/CustomButton';
import NewIssueLeft from 'components/new-issue/NewIssueLeft';
import NewIssueRight from 'components/new-issue/NewIssueRight';

import { newIssuesContentAtom } from 'stores/issueStore';
import { NewIssuesIdQuery } from 'stores/NewIssuesSideStore';

const NewIssuePage = () => {
  const history = useHistory();
  const IdReset = useResetRecoilState(NewIssuesIdQuery);
  const contentReset = useResetRecoilState(newIssuesContentAtom);
  const IssuesId = useRecoilValue(NewIssuesIdQuery);
  const IssuesContent = useRecoilValue(newIssuesContentAtom);
  console.log(IssuesId, IssuesContent);
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    (async function () {
      await instanceWithAuth.post(
        `${process.env.REACT_APP_API_URL}/api/issues`,
        {
          title: IssuesContent.title,
          description: IssuesContent.description,
          assignee: IssuesId.assigneeList[0],
          label_ids: IssuesId.labelList,
          milestone_id: IssuesId.milestoneList[0],
        }
      );
    })();
    history.push('/issues');
  };
  useEffect(() => {
    return () => {
      IdReset();
      contentReset();
    };
  }, []);
  return (
    <>
      <NewIssueTitle>새로운 이슈 작성</NewIssueTitle>
      <Divider />
      <NewIssueContent>
        <NewIssueLeft />
        <NewIssueRight />
      </NewIssueContent>
      <Divider />
      <StyledDiv>
        <CustomButton onClick={clickHandler}>완료</CustomButton>
      </StyledDiv>
    </>
  );
};

export default NewIssuePage;

const StyledDiv = styled.div`
  display: flex;
  margin: 1.2rem;
  justify-content: flex-end;
`;

const NewIssueTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.XXL};
  margin: 2rem;
`;

const NewIssueContent = styled.div`
  display: flex;
  margin: 2rem 0;
`;
