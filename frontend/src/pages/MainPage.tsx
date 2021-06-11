import styled from 'styled-components';
import ResponsiveLayout from '../components/common/ResponsiveLayout';

import LoginButton from '../components/LoginButton';
import { SignIn } from '../components/SignIn';

const MainPage = () => {
  return (
    <MainPageLayout>
      <MainPageBlock>
        <MainPageTitleLayer>
          <MainPageTitleText>
            Issue Tracker
          </MainPageTitleText>
        </MainPageTitleLayer>
        <LoginButton />
        <MainPageTitleLayer>
          <SignIn />
        </MainPageTitleLayer>
        <MainPageTitleLayer>
            or
        </MainPageTitleLayer>
        <MainPageTitleLayer>
            나머지
        </MainPageTitleLayer>
      </MainPageBlock>
      
    </MainPageLayout>
  )
}

const MainPageLayout = styled.div`
  display: flex;
  // 백그라운드 Fluid 처리
`

const MainPageBlock = styled(ResponsiveLayout)`
    width: 100%;
    height: calc(100vh - 16px);
        
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainPageTitleLayer = styled.div`
`;

const MainPageTitleText = styled.span`
  font-weight: 400;
  font-size: 5.6rem;
`

export default MainPage;