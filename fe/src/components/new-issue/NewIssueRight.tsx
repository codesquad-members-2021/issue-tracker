import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';

import AuthorAvatar from 'components/common/AuthorAvatar';
import Label from 'components/common/Label';
import MilestoneBar from 'components/milestones/MilestoneBar';
import { labelQuery } from 'stores/labelStore';
import SidebarList from 'components/new-issue/SidebarList';

import { openedMilestoneQuery } from 'stores/milestoneStore';
import { NewIssuesIdQuery } from 'stores/NewIssuesSideStore';
import { assigneeQuery } from 'stores/userStore';

const NewIssueRight = () => {
  const newIssueId = useRecoilValue(NewIssuesIdQuery);
  const label = useRecoilValue(labelQuery).filter(
    (v) => newIssueId.labelList.indexOf(v.id) !== -1
  );
  const assignee = useRecoilValue(assigneeQuery).filter(
    (v) => newIssueId.assigneeList.indexOf(v.id) !== -1
  );
  const milestone = useRecoilValue(openedMilestoneQuery).filter(
    (v) => newIssueId.milestoneList.indexOf(v.id) !== -1
  );

  return (
    <StyledNewIssueRight>
      <SidebarList type="assigneeList" />
      {assignee.map(({ title, imgurl }) => (
        <StyledColum>
          <StyledFlex>
            <AuthorAvatar profileImg={imgurl} size="S" /> <span>{title}</span>
          </StyledFlex>
        </StyledColum>
      ))}
      <Divider />
      <SidebarList type="labelList" />
      {label.map(({ title, labelColor, textColor }) => (
        <StyledColum>
          <Label {...{ title, labelColor, textColor }} />
        </StyledColum>
      ))}
      <Divider />
      <SidebarList type="milestoneList" />
      {milestone.map(({ title, openedIssueCount, closedIssueCount }) => (
        <StyledColum>
          <MilestoneBar {...{ openedIssueCount, closedIssueCount }} />
          <MileStoneSpan>{title}</MileStoneSpan>
        </StyledColum>
      ))}
    </StyledNewIssueRight>
  );
};

export default NewIssueRight;
const MileStoneSpan = styled.span`
  line-height: 3;
  font-weight: 700;
  color: ${({ theme }) => theme.color.grayscale.label};
`;
const StyledFlex = styled.div`
  display: flex;
  width: 100%;
  > span {
    margin-left: 0.5rem;
  }
`;
const StyledColum = styled.div`
  padding: 0.6rem 1.5rem;
  width: 100%;
  box-sizing: border-box;
`;
const StyledNewIssueRight = styled.div`
  ${({ theme }) => theme.style.flexColumn};
  border-radius: ${({ theme }) => theme.border.radius.M};
  border: 2px solid ${({ theme }) => theme.color.grayscale.line};
  width: 25%;
  height: fit-content;
  margin-left: 2rem;
`;
