import Milestones from 'components/milestones/Milestones';
import NewMilestone from 'components/milestones/NewMilestone';

import NavbarButtons from 'components/navbar/NavbarButtons';
import { useState } from 'react';
import styled from 'styled-components';

const MilestoneListPage = () => {
  const type = 'Milestone';
  const [popup, setPopup] = useState(false);
  return (
    <>
     <NavbarButtons {...{type,setPopup}}/>
      {popup && <NewMilestone  {...{setPopup}}/>}
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
