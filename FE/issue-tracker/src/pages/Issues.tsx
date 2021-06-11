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
  padding: 0 80px;
  width: 1440px;
`;
