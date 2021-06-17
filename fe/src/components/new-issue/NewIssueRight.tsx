import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import SidebarList from './SidebarList';

const NewIssueRight = () => {
  return (
    <StyledNewIssueRight>
      <SidebarList type="labelList" />
      <Divider />
      <SidebarList type="labelList" />
      <Divider />
      <SidebarList type="milestoneList" />
    </StyledNewIssueRight>
  );
};

export default NewIssueRight;

const StyledNewIssueRight = styled.div`
  ${({ theme }) => theme.style.flexColum};
  border-radius: ${({ theme }) => theme.border.radius.M};
  border: 2px solid ${({ theme }) => theme.color.grayscale.line};
  width: 25%;
  height: fit-content;
  margin-left: 2rem;
`;
