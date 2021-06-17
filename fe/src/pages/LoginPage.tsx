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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;  
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default LoginPage;
