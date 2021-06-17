
import Header from 'components/header/Header';
import Labels from 'components/labels/Labels';
import NavbarButtons from 'components/navbar/NavbarButtons';
import styled from 'styled-components';

const LabelPage = () => {
  return (
    <>
      <Header />
      <NavbarButtons buttonType="추가" />
      <StyledSpace>
        <Labels />
      </StyledSpace>
    </>
  );
};

export default LabelPage;

const StyledSpace = styled.div`
  margin-top: 1.5rem;
`;
