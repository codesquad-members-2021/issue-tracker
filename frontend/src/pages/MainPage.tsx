import styled from 'styled-components';
import ResponsiveLayout from '../components/common/ResponsiveLayout';

const MainPage = () => {
  return (
    <MainPageLayout>
      <MainPageBlock>
        <MainPageTitleLayer>
            타이틀
        </MainPageTitleLayer>
        <MainPageTitleLayer>
            버튼
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

`

const MainPageTitleLayer = styled.div`
`


export default MainPage;