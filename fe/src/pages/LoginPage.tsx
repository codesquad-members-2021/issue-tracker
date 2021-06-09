import styled from 'styled-components';
import Logo from 'components/common/Logo';
import GitHubLoginButton from 'components/buttons/GitHubLoginButton';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Logo />
      <GitHubLoginButton />
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LoginPage;
