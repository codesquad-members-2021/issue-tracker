import styled from 'styled-components';

import ResponsiveLayout from 'components/common/ResponsiveLayout';

const IssueListPage = () => {
  return (
    <IssueListLayout>
      <IssueListBlock>
        <h1> 이슈 </h1>
      </IssueListBlock>
    </IssueListLayout>
  )
}


const IssueListLayout = styled.div`
`;

const IssueListBlock = styled(ResponsiveLayout)`
  width: 100%;
  padding: 0 80px;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
`

export default IssueListPage;