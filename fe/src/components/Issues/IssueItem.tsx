import { Checkbox } from '@material-ui/core';
import { ReactComponent as Open } from 'icons/openIssue.svg';
import { ReactComponent as Close } from 'icons/closeIssue.svg';
import { ReactComponent as Milestone } from 'icons/openMilestone.svg';
import styled from 'styled-components';
import { IssueItemType } from 'types/issueType';
import AuthorAvatar from 'components/common/AuthorAvatar';
import IssueItemLeft from './IssueItemLeft';

const IssueItem = ({
  isOpen,
  title,
  labeList,
  issueNumber,
  author,
  createdTime,
  milestoneTitle,
}: IssueItemType) => {
  return (
    <StyledIssueItem>
      <IssueItemLeft
        {...{ title, labeList, issueNumber, createdTime, milestoneTitle }}
      />
      <IssueItemRight>
        <AuthorAvatar
          name={author.name}
          profileImg={author.profileImg}
          size="S"
        />
      </IssueItemRight>
    </StyledIssueItem>
  );
};

export default IssueItem;

const StyledIssueItem = styled.li`
  ${({ theme }) => theme.style.flexSpaceBetween}
  padding: 1rem;
  box-sizing: border-box;
  border-top: 1px solid ${({ theme }) => theme.color.grayscale.line};
`;

const IssueItemRight = styled.div`
  padding-right: 1.4rem;
`;
