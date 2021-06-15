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
  ${({ theme }) => theme.newLabelMilestoneWrap};
`;
