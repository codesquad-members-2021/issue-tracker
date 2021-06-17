import Labels from 'components/labels/Labels';
import NavbarButtons from 'components/navbar/NavbarButtons';
import styled from 'styled-components';

const LabelPage = () => {
  return (
    <>
      <NavbarButtons type="Label" />
      <StyledSpace />
      <Labels />
    </>
  );
};

export default LabelPage;

const StyledSpace = styled.div`
  height: 1.5rem;
`;
