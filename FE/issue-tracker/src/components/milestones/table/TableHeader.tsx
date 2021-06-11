import styled from 'styled-components';
import { ReactComponent as MilestoneIcon } from '@assets/milestone.svg';
import { ReactComponent as ArchiveIcon } from '@assets/archive.svg';

function TableHeader() {
  return (
    <TableHeaderWrap>
      <MilestoneTab>
        <li className="milestone_tab active_tab">
          <MilestoneIcon className="icon milestone_icon" />
          열린 마일스톤 (2)
        </li>
        <li className="milestone_tab">
          <ArchiveIcon className="icon archive_icon" />
          닫힌 마일스톤 (2)
        </li>
      </MilestoneTab>
    </TableHeaderWrap>
  );
}

export default TableHeader;

const TableHeaderWrap = styled.div`
  ${({ theme }) => theme.tableHeader};
`;

const MilestoneTab = styled.ul`
  display: flex;
  .milestone_tab {
    display: flex;
    align-items: center;
    margin-right: 25px;
    .icon {
      margin-right: 5px;
    }
    .milestone_icon > path {
      fill: ${({ theme }) => theme.colors.gr_label};
    }
    .archive_icon path {
      stroke: ${({ theme }) => theme.colors.gr_label};
    }
  }

  .active_tab {
    color: ${({ theme }) => theme.colors.gr_titleActive};
    .milestone_icon > path {
      fill: ${({ theme }) => theme.colors.gr_titleActive};
    }
    .archive_icon path {
      stroke: ${({ theme }) => theme.colors.gr_titleActive};
    }
  }
`;
