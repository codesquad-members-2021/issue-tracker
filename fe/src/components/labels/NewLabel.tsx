import styled from 'styled-components';
import NewLabelsItemInput from './NewLabelsItemInput';

const NewLabel = ({
  setPopup,
}: {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <StyledNewLabel>
      <LabelsItemEditTitle>새로운 레이블 추가</LabelsItemEditTitle>
      <NewLabelsItemInput {...{setPopup}}/>
    </StyledNewLabel>
  );
};

export default NewLabel;

const StyledNewLabel = styled.div`
  margin: 1.5rem 0;
  ${({ theme }) => theme.style.flexColumn}
  padding: 2.25rem 2rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.grayscale.line};
  border-radius: ${({ theme }) => theme.border.radius.S};
`;

const LabelsItemEditTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.XL};
`;
