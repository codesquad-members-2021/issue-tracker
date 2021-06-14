import styled from 'styled-components';

import ResponsiveLayout from '../components/common/ResponsiveLayout';

import * as Signin from '../components/SignIn';

const SigninPage = () => {
  return (
    <SigninPageLayout>
      <SigninPageBlock>
        <TitleLayer>
          <TitleText> Issue Tracker </TitleText>
        </TitleLayer>
        <OAuthLayer>
          <Signin.GithubLogin />
        </OAuthLayer>
        <IDSigninText> or </IDSigninText>
        <IDSigninLayer>
          <Signin.IDLogin />
        </IDSigninLayer>
        <IDSignupLayer>
          <span> 회원가입 </span>
        </IDSignupLayer>
      </SigninPageBlock>
    </SigninPageLayout>
  )
}

const SigninPageLayout = styled.div`
  background-color: #F7F7FC;
  
  display: flex;
  justify-content: center;
`

const SigninPageBlock = styled(ResponsiveLayout)`
  width: 340px;
  height: calc(100vh - 16px);
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layer = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
`;
const TitleLayer = styled(Layer)`
  margin-bottom: 60px;
  
  display: flex;
  justify-content: center;
`;
const OAuthLayer = styled(Layer)``;
const IDSigninLayer = styled(Layer)``;
const IDSignupLayer = styled(Layer)`
  margin-top: 30px;
`;

const TitleText = styled.span`
  font-family: Montserrat;
  font-style: italic;
  font-weight: normal;
  font-weight: 400;
  font-size: 5.6rem;

  line-height: 72px;
  letter-spacing: -0.04em;
`;

const IDSigninText = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: bold;
  line-height: 28px;
  
  color: #A0A3BD;
  margin: 24px 0;
`



export default SigninPage;