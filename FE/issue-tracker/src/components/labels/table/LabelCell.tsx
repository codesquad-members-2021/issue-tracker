import styled from 'styled-components';
import { ReactComponent as Edit } from '@assets/edit.svg';
import { ReactComponent as Delete } from '@assets/trash.svg';
import Label from '@components/labels/Label';

interface Props {
  last: boolean;
}

function LabelCell({ last }: Props) {
  return (
    <LabelWrap last={last}>
      <StyledDiv>
        <LabelBox>
          <Label name="documentation" colorCode="#004DE3" fontLight={true} />
        </LabelBox>
        <LabelDescript>레이블에 대한 설명</LabelDescript>
      </StyledDiv>

      <LabelButtons>
        <EditButton>
          <Edit className="btn_edit" />
          <span>편집</span>
        </EditButton>
        <DeleteButton>
          <Delete className="btn_delete" />
          <span>삭제</span>
        </DeleteButton>
      </LabelButtons>
    </LabelWrap>
  );
}

export default LabelCell;

interface LabelWrapType {
  last: boolean;
}

const LabelWrap = styled.div<LabelWrapType>`
  width: 100%;
  height: 100px;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.colors.gr_offWhite};
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-top: none;
  border-radius: ${({ last }) => (last ? '0 0 16px 16px' : 'none')};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const LabelBox = styled.div`
  width: 208px;
`;

const LabelDescript = styled.div`
  width: 800px;
  color: ${({ theme }) => theme.colors.gr_label};
`;

const LabelButtons = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
`;

const EditButton = styled.div`
  width: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gr_label};
  cursor: pointer;
  .btn_edit > path {
    stroke: ${({ theme }) => theme.colors.gr_label};
  }
`;
const DeleteButton = styled.div`
  width: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.error_primary};
  cursor: pointer;
  .btn_delete > path {
    stroke: ${({ theme }) => theme.colors.error_primary};
  }
`;
