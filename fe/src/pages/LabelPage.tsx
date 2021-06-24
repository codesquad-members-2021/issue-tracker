import Labels from 'components/labels/Labels';
import NewLabel from 'components/labels/NewLabel';
import NavbarButtons from 'components/navbar/NavbarButtons';
import { useState } from 'react';
import styled from 'styled-components';

const LabelPage = () => {
  const type = 'Label';
  const [popup, setPopup] = useState(false);
  return (
    <>
      <NavbarButtons {...{type,setPopup}}/>
      {popup && <NewLabel {...{setPopup}}/>}
      <StyledSpace />
      <Labels />
    </>
  );
};

export default LabelPage;

const StyledSpace = styled.div`
  height: 1.5rem;
`;
