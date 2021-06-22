import Filter from 'components/common/Filter';
import styled from 'styled-components';
import { SidebarListType } from 'types/issueType';
import { getTitle } from 'utils/util';

const SidebarList = ({ type }: { type: SidebarListType }) => {
  return (
    <StyledSidebarList>
      <span>{getTitle(type)}</span>
      <Filter filterType={type} isPlus={true} />
    </StyledSidebarList>
  );
};

export default SidebarList;

const StyledSidebarList = styled.li`
  ${({ theme }) => theme.style.flexSpaceBetween};
  padding: 1.5rem 2rem;
  box-sizing: border-box;
`;
