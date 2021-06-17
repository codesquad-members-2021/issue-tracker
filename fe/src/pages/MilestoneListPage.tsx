import Header from 'components/header/Header';
import Milestones from 'components/milestones/Milestones';

import NavbarButtons from 'components/navbar/NavbarButtons';
import styled from 'styled-components';

const MilestoneListPage = () => {
  return (
    <>
      <NavbarButtons type="Milestone" />
      <StyledSpace>
        <Milestones />
      </StyledSpace>
    </>
  );
};
export default MilestoneListPage;

const StyledSpace = styled.div`
  margin-top: 1.5rem;
`;
