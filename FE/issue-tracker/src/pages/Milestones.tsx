import styled from 'styled-components';
import Header from '@components/common/Header';
import Tabs from '@components/common/Tabs';

function Milestones() {
  return (
    <LabelsPageContainer>
      <Header />
      <Tabs page="milestones" />
    </LabelsPageContainer>
  );
}

export default Milestones;

const LabelsPageContainer = styled.div`
  ${({ theme }) => theme.page}
  outline: 1px solid red;
`;
