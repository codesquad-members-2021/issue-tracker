import { Avatar } from '@material-ui/core';
import Logo from 'components/common/Logo';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <CustomAvatar alt="Eamon3481" src={undefined} >E</CustomAvatar>
    </StyledHeader>
  );
};

export default Header;


const CustomAvatar = styled(Avatar)`
  color: ${({ theme }) => theme.color.grayscale.line};
  font-weight: 700;
  background-color: ${({ theme }) => theme.color.grayscale.label};
  border: 3px solid ${({ theme }) => theme.color.grayscale.line};
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  box-sizing: border-box;
`;
