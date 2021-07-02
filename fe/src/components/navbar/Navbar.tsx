import { InputBase } from '@material-ui/core';
import IssueFilter from 'components/common/IssueFilter';
import styled from 'styled-components';
import { ReactComponent as SearchIconSvg } from 'icons/search.svg';
import NavbarButtons from './NavbarButtons'; 

const Navbar = () => {
  return ( 
    <Nav>
      <NavbarLeft>
        <IssueFilter />    
        <SearchIcon />
        <FilterSearchBar />
      </NavbarLeft>

      <NavbarRight>
        <NavbarButtons type="All" />
      </NavbarRight>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  ${({ theme }) => theme.style.flexSpaceBetween};
  margin-bottom: 1.5rem;
`;

const FilterSearchBar = styled(InputBase)`
  width: 30rem;
  height: 2.5rem;
  padding: 0;
  border-radius: 0px 11px 11px 0px;
  border-left: 1px solid ${({ theme }) => theme.color.grayscale.line};
  background-color: ${({ theme }) => theme.color.grayscale.inputBG};
  color: ${({ theme }) => theme.color.grayscale.placeholder};
  padding-left: 2rem;
`;

const NavbarLeft = styled.div`
  position: relative;
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.grayscale.line};
  border-radius: ${({ theme }) => theme.border.radius.S};
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const SearchIcon = styled(SearchIconSvg)`
  position: absolute;
  top: 12px;
  left: 107px;
  z-index: 99;
`;

export default Navbar;
