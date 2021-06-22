import Auth from '../components/Auth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextHeader, TextLogin } from '../util/reference';
import PrimaryButton from '../components/Common/PrimaryButton';
import DefaultInput from '../components/Common/DefaultInput';

const LoginPage = () => {
  const {
    github,
    placeHolder,
    id,
    or,
    register
  } = TextLogin;
  const GITHUB_URL = `https://github.com/login/oauth/authorize?client_id=04c310007c2531045237&redirect_uri=http://localhost:3000/oauth-callback`;
  return (
    <LoginLayout>
      <LoginContentLayout>
        <LoginLogoLayout>{TextHeader.logo}</LoginLogoLayout>
        <GitHubButtonLayout btnStyle="medium"><a href={GITHUB_URL}>{github}</a></GitHubButtonLayout>
        <SeparatorLayout>{or}</SeparatorLayout>
        <InputLayout type="text" placeholder={placeHolder.id} />
        <InputLayout type="password" placeholder={placeHolder.password} />
        <LoginButtonLayout btnStyle="medium">{id}</LoginButtonLayout>
        <RegisterLinkStyle>
          <Link to="/register">
            {register}
          </Link>
        </RegisterLinkStyle>
      </LoginContentLayout>
    </LoginLayout>
  );
};

const LoginLayout = styled.div`
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContentLayout = styled.div`
  max-width: 20rem;
`;

const LoginLogoLayout = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.XL};
  font-family: ${({ theme }) => theme.fontFamily.logo};
  font-weight: ${({ theme }) => theme.fontWeight.middle};
  font-style: italic;
  text-align: center;
  margin-bottom: 4rem;
`;

const GitHubButtonLayout = styled(PrimaryButton)`
  width: 100%;
  font-size: 1.125rem;
  padding: 0.5rem 1rem;
  text-align: center;
  justify-content: center;
  background-color: #333;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grayScale.title};
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  border-radius: 0.75rem;
`;

const SeparatorLayout = styled.div`
  color: ${({ theme }) => theme.colors.grayScale.placeHolder};
  text-align: center;
  margin: 1.5rem 0;
`;

const InputLayout = styled(DefaultInput)`
  background-color: ${({ theme }) => theme.colors.grayScale.inputBgColor};
  &::place-holder {
    color: ${({ theme }) => theme.colors.grayScale.placeHolder};
  }
  padding: 1.125rem 1.5rem;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  font-size: 1rem;
`;

const LoginButtonLayout = styled(PrimaryButton)`
  width: 100%;
  font-size: 1.125rem;
  padding: 0.5rem 1rem;
  text-align: center;
  justify-content: center;
  border-radius: 0.75rem;
  margin-top: 0.5rem;
`;

const RegisterLinkStyle = styled.div`
  margin-top: 1.875rem;
  text-align: center;
  a {
    color: ${({ theme }) => theme.colors.grayScale.body};
    font-size: 0.75rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-decoration: none;
  }
`;

export default LoginPage;