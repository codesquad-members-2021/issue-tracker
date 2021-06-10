import styled from 'styled-components';

import Header from '@components/common/Header';
import IssueContainer from '@components/issues/IssueContainer';

function Issues() {
  return (
    <IssueWrap>
      <Header />
      <IssueContainer />
    </IssueWrap>
  );
}

export default Issues;

const IssueWrap = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  // 반응형으로 만들어야하나?
  // 기획서의 너비와 패딩으로 값을 주면 큰 모니터에서 생각보다 작음
  padding: 0 80px;
  width: 1440px;
`;
