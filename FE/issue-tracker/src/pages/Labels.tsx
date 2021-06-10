import styled from 'styled-components';
import Header from '@components/common/Header';
import Actions from '@components/labels/Actions';
import NewLabel from '@components/labels/NewLabel';
import LabelTable from '@components/labels/table/LabelTable';

function Labels() {
  return (
    <LabelsPageContainer>
      <Header />
      <Actions page="labels" />
      <NewLabel />
      <LabelTable />
    </LabelsPageContainer>
  );
}

export default Labels;

const LabelsPageContainer = styled.div`
  ${({ theme }) => theme.page}
`;
