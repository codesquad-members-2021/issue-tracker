import styled from 'styled-components';
import Header from '@components/common/Header';
import Tabs from '@components/common/Tabs';

function Labels() {
  return (
    <LabelsPageContainer>
      <Header />
      <Tabs page="labels" />
    </LabelsPageContainer>
  );
}

export default Labels;

const LabelsPageContainer = styled.div`
  ${({ theme }) => theme.page}
  outline: 1px solid red;
`;
