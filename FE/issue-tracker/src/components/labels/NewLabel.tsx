import styled from 'styled-components';
import LabelInputBox from '@components/labels/LabelInputBox';
import CompleteBtn from '@components/common/CompleteBtn';

function NewLabel() {
  return (
    <NewLabelWrap>
      <h2>새로운 레이블 추가</h2>
      <LabelInputBox>
        <CompleteBtn />
      </LabelInputBox>
    </NewLabelWrap>
  );
}

export default NewLabel;

const NewLabelWrap = styled.section`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  padding: 32px;
  border-radius: ${({ theme }) => theme.radii['2xl']};
  background-color: ${({ theme }) => theme.colors.gr_offWhite};
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-bottom: 16px;
  }
`;
