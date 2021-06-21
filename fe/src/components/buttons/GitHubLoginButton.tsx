import { Button } from '@material-ui/core';
import styled from 'styled-components';

const GitHubLoginButton = () => {
  return (
    <a href="https://github.com/login/oauth/authorize?client_id=a27a9d4023b6ebb6e829&redirect_uri=http://localhost:3000/api/login/callback&scope=user">
      <StyledCreateButton variant="contained" size="large">
        GitHub 계정으로 로그인
      </StyledCreateButton>
    </a>
  );
};

export default GitHubLoginButton;

const StyledCreateButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.grayscale.body};
  color: ${({ theme }) => theme.color.grayscale.offWhite};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  width: 20rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.border.radius.S};
  margin-left: 1rem;
  margin-top: 5rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.grayscale.label};
  }
`;
