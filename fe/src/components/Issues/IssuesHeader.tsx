import styled from 'styled-components';
import { Button, Checkbox } from '@material-ui/core';
import { ReactComponent as Open } from 'icons/openIssue.svg';
import { ReactComponent as Close } from 'icons/closeIssue.svg';

const IssuesHeader = () => {
  return (
    <StyledIssuesHeader>
      <IssuesHeaderLeft>
        <Checkbox color="primary" />
        <IssuesButton>
          <OpenSvg /> 열린 이슈(2)
        </IssuesButton>
        <IssuesButton>
          <CloseSvg />
          닫힌 이슈(0)
        </IssuesButton>
      </IssuesHeaderLeft>
      <IssuesHeaderRight></IssuesHeaderRight>
    </StyledIssuesHeader>
  );
};

export default IssuesHeader;

const IssuesButton = styled(Button)`
  color: ${({ theme }) => theme.color.grayscale.titleActive};
  stroke: ${({ theme }) => theme.color.grayscale.titleActive};
  font-weight: 700;
`;

const StyledIssuesHeader = styled.div`
  ${({ theme }) => theme.style.flexSpaceBetween}

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
