import { Wrapper, Upper, Lower } from 'components/common/Table';
import { ReactComponent as Open } from 'icons/openIssue.svg';
import { ReactComponent as Close } from 'icons/closeIssue.svg';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import MilestonesItem from './MilestonesItem';

const Milestones = () => {
  return (
    <Wrapper>
      <Upper>
        <MilestonesHeader>
          <MilestonesButton startIcon={<OpenSvg />}>
            열린 마일스톤(2)
          </MilestonesButton>
          <MilestonesButton startIcon={<CloseSvg />}>
            닫힌 마일스톤(0)
          </MilestonesButton>
        </MilestonesHeader>
      </Upper>
      <Lower>
        <MilestonesItem
          id={1}
          title="마일스톤 타이틀"
          description="마일스톤 디스크립션"
          dueDate="2021-06-09" 
          openedIssueCount={2}
          closedIssueCount={3}
        />
      </Lower>
    </Wrapper>
  );
};

export default Milestones;

const MilestonesHeader = styled.div`
  padding: 1rem;
`;

const MilestonesButton = styled(Button)`
  color: ${({ theme }) => theme.color.grayscale.titleActive};
  stroke: ${({ theme }) => theme.color.grayscale.titleActive};
  font-weight: 700;
`;
const OpenSvg = styled(Open)`
  path {
    stroke: inherit;
  }
`;
const CloseSvg = styled(Close)`
  path {
    stroke: inherit;
  }
`;
