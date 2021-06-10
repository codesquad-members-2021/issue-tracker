import IssueFilter from 'components/common/IssueFilter';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <IssueFilter />
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
`;

export default Navbar;
