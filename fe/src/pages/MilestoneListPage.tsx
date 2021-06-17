import Header from 'components/header/Header';
import Milestones from 'components/milestones/Milestones';

import NavbarButtons from 'components/navbar/NavbarButtons';
import styled from 'styled-components';

const MilestoneListPage = () => {
  return (
    <>
      <Header />
      <NavbarButtons buttonType="추가" />
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
