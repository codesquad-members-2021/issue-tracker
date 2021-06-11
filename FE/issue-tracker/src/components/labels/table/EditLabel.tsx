import styled from 'styled-components';
import LabelInputBox from '@components/labels/LabelInputBox';
import EditCompleteBtn from '@components/common/EditCompleteBtn';

function EditLabel() {
  return (
    <EditLabelWrap>
      <h2>레이블 편집</h2>
      <LabelInputBox>
        <EditCompleteBtn />
      </LabelInputBox>
    </EditLabelWrap>
  );
}

export default EditLabel;

const EditLabelWrap = styled.section`
  ${({ theme }) => theme.editLabelMilestoneWrap};
`;
