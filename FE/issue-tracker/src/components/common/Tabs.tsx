import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Tag } from '@assets/tag.svg';
import { ReactComponent as Milestone } from '@assets/milestone.svg';

interface Props {
  page: string;
}

function Tabs({ page }: Props) {
  // UI 설정을 위한 임시 하드코딩
  const labelsLength = 3;
  const milestonesLength = 2;

  return (
    <TabBox>
      <LabelTab to="/labels" page={page}>
        <Tag />
        <div className="tab_name">레이블</div>
        <div>{`(${labelsLength})`}</div>
      </LabelTab>
      <MilestoneTab to="/milestones" page={page}>
        <Milestone />
        <div className="tab_name">마일스톤</div>
        <div>{`(${milestonesLength})`}</div>
      </MilestoneTab>
    </TabBox>
  );
}

export default Tabs;

const TabBox = styled.div`
  width: 320px;
  height: 40px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-radius: 11px;
`;

interface activeTab {
  page: string;
}

const LabelTab = styled(Link)<activeTab>`
  width: 50%;
  ${({ theme }) => theme.flexCenter}
  background-color: ${({ theme, page }) =>
    page === 'labels' ? theme.colors.gr_line : 'transparent'};
  border-radius: 11px 0 0 11px;
  .tab_name {
    margin: 0 8px;
  }
`;

const MilestoneTab = styled(Link)<activeTab>`
  width: 50%;
  ${({ theme }) => theme.flexCenter}
  background-color: ${({ theme, page }) =>
    page === 'milestones' ? theme.colors.gr_line : 'transparent'};
  border-radius: 0 11px 11px 0;
  .tab_name {
    margin: 0 8px;
  }
`;
