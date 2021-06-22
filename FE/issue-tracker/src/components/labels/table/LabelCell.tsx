import { useState } from 'react';
import styled from 'styled-components';

import Label from '@components/common/Label';
import EditMiniButton from '@components/common/EditMiniButton';
import DeleteMiniButton from '@components/common/DeleteMiniButton';

interface Props {
  isLastItemStyle: boolean;
}

function LabelCell({ isLastItemStyle }: Props) {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <LabelWrap isLastItemStyle={isLastItemStyle}>
      <StyledDiv>
        <LabelBox>
          <Label name="documentation" colorCode="#004DE3" fontLight={true} />
        </LabelBox>
        <LabelDescript>레이블에 대한 설명</LabelDescript>
      </StyledDiv>

      <LabelButtons>
        <EditMiniButton setState={setIsDisabled}>편집</EditMiniButton>
        <DeleteMiniButton>삭제</DeleteMiniButton>
      </LabelButtons>
    </LabelWrap>
  );
}

export default LabelCell;

interface LabelWrapType {
  isLastItemStyle: boolean;
}

const LabelWrap = styled.div<LabelWrapType>`
  ${({ theme }) => theme.cellWrap};
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
