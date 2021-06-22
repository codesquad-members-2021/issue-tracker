import styled from 'styled-components';
import { IssueItemLeftPropsType } from 'types/issueType';
import { ReactComponent as Open } from 'icons/openIssue.svg';
// import { ReactComponent as Close } from 'icons/closeIssue.svg';
import { ReactComponent as Milestone } from 'icons/openMilestone.svg';
import { Checkbox } from '@material-ui/core';
import Label from 'components/common/Label';
import { useHistory } from 'react-router-dom';

const IssueItemLeft = ({
  id,
  title,
  issueNumber,
  createdTime,
  milestoneTitle,
  labeList,
}: IssueItemLeftPropsType) => {
  const history = useHistory();

  const routeToIssueDetailPage = () => {
    history.push(`/issues/${id}`);
  };

  return (
    <StyledIssueItemLeft>
      <IssueTitle>
        <Checkbox color="primary" />
        <OpenSvg />
        <span className="title" onClick={routeToIssueDetailPage}>
          {title}
        </span>
        <Spacer />
        <SelectedLables>
          {labeList.length &&
            labeList.map((label, idx) => <Label key={idx} {...{ ...label }} />)}
        </SelectedLables>
      </IssueTitle>
      <IssueSubtitle>
        #{issueNumber} {createdTime} <MilestoneSvg /> {milestoneTitle}
      </IssueSubtitle>
    </StyledIssueItemLeft>
  );
};

export default IssueItemLeft;

const StyledIssueItemLeft = styled.div`
  ${({ theme }) => theme.style.flexColumn};
`;

const IssueTitle = styled.div`
  ${({ theme }) => theme.style.flexAlignItemsCenter};

  .title {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  .title:hover {
    color: ${({ theme }) => theme.color.darkBlue};
    cursor: pointer;
  }
`;

const OpenSvg = styled(Open)`
  path {
    stroke: ${({ theme }) => theme.color.blue};
    fill: ${({ theme }) => theme.color.lightBlue};
  }
  margin-right: 0.2rem;
`;

const Spacer = styled.div`
  width: 0.5rem;
`;

const SelectedLables = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const MilestoneSvg = styled(Milestone)`
  path {
    stroke: inherit;
  }
  margin-right: 0.2rem;
`;

const IssueSubtitle = styled.span`
  margin-left: 1rem;
  padding: 0.3rem 1.4rem;
  color: ${({ theme }) => theme.color.grayscale.label};
`;
