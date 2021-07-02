import styled from 'styled-components';
import { IssueItemType } from 'types/issueType';
import AuthorAvatar from 'components/common/AuthorAvatar';
import IssueItemLeft from './IssueItemLeft';

const IssueItem = ({
  id,
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
        {...{ id, title, labeList, issueNumber, createdTime, milestoneTitle }}
      />
      <IssueItemRight>
        <AuthorAvatar profileImg={author.profileImg} size="S" />
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
