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
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-top: none;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.gr_offWhite};
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-bottom: 16px;
  }
  .icon_edit {
    margin-right: 5px;
    path {
      stroke: ${({ theme }) => theme.colors.gr_offWhite};
    }
  }
  .icon_cancel {
    margin-right: 5px;
    path {
      stroke: ${({ theme }) => theme.colors.bl_initial};
    }
  }
`;
