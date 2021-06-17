import Filter from 'components/common/Filter';
import styled from 'styled-components';
import { SidebarListProps } from 'types/newIssueType';
import { getTitle } from 'utils/util';


const SidebarList = ({type} : SidebarListProps) => {
    return (
        <StyledSidebarList>
            <span>{getTitle(type)}</span>
            <Filter filterType={type} isPluse={true}/>
        </StyledSidebarList>
    )
}

export default SidebarList

const StyledSidebarList = styled.li`
  ${({ theme }) => theme.style.flexSpaceBetween};
  padding : 1.5rem 2rem;
  box-sizing: border-box;
`;
 