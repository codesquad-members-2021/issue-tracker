import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
import { ReactComponent as Edit } from '@assets/edit.svg';
import { ReactComponent as Cancel } from '@assets/cancel.svg';
import LabelInputBox from '@components/labels/LabelInputBox';
import { submitButton, whiteButton } from '@components/labels/newLabelStyle';

function EditLabel() {
  return (
    <EditLabelWrap>
      <h2>레이블 편집</h2>
      <LabelInputBox>
        <ButtonBox>
          <Button {...submitButton}>
            <Edit className="icon_edit" />
            완료
          </Button>
          <Button {...whiteButton} marginRight="8px">
            <Cancel className="icon_cancel" />
            취소
          </Button>
        </ButtonBox>
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

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
