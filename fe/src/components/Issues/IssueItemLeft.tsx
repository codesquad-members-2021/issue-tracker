import styled from 'styled-components';
import { IssueItemLeftPropsType } from 'types/issueType';
import { ReactComponent as Open } from 'icons/openIssue.svg';
import { ReactComponent as Close } from 'icons/closeIssue.svg';
import { ReactComponent as Milestone } from 'icons/openMilestone.svg';
import { Checkbox } from '@material-ui/core';
import Label from 'components/common/Label';

const IssueItemLeft = ({
  title,
  issueNumber,
  createdTime,
  milestoneTitle,
  labeList,
}: IssueItemLeftPropsType) => {
  return (
    <StyledIssueItemLeft>
      <IssueTitle>
        <Checkbox color="primary" />
        <span>
          <OpenSvg />
          {title}
        </span>
        {labeList.length
          ? labeList.map((label,idx) => <Label key={idx} {...{ ...label }} />)
          : null}
      </IssueTitle>
      <IssueSubtitle>
        #{issueNumber} {createdTime} <MilestoneSvg /> {milestoneTitle}
      </IssueSubtitle>
    </StyledIssueItemLeft>
  );
};

export default IssueItemLeft;

const StyledIssueItemLeft = styled.div`
  ${({ theme }) => theme.style.flexColum};
`;

const IssueTitle = styled.div`
  ${({ theme }) => theme.style.flexAlignItemsCenter};
`;


const OpenSvg = styled(Open)`
  path {
    stroke: ${({ theme }) => theme.color.blue};
    fill: ${({ theme }) => theme.color.lightBlue};
  }
  margin-right: 0.2rem;
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
