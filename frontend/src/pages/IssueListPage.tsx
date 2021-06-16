import styled from 'styled-components';

import ResponsiveLayout from 'components/common/ResponsiveLayout';
import IssueCategoryFilter from 'components/IssueCategoryFilter/IssueCategoryFilter';

import IssueList from 'components/IssueList/IssueList';

const IssueListPage = () => {

  return (
    <IssueListLayout>
      <IssueListBlock>
        <IssueCategoryFilter />
        <IssueList />
      </IssueListBlock>
    </IssueListLayout>
  )
}

const IssueListLayout = styled.div`
  background-color: #F7F7FC;
  height: calc(100vh - 10px);
`;

const IssueListBlock = styled(ResponsiveLayout)`
  width: 100%;
  padding: 0 80px;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;

  & > div + div {
    margin-top: 24px;
  }
`

export default IssueListPage;