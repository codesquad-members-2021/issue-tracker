import AuthorAvatar from 'components/common/AuthorAvatar';
import Logo from 'components/common/Logo';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <AuthorAvatar name="eamon" size="L" />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  box-sizing: border-box;
`;
