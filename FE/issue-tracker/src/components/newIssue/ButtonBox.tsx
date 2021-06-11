import styled from 'styled-components';

import { Button } from '@chakra-ui/button';

function ButtonBox() {
  return (
    <ButtonBoxWrap>
      <CancelBtn>
        <span>x 작성취소</span>
      </CancelBtn>
      <Button
        width="240px"
        height="56px"
        colorScheme="blue"
        background="bl_initial"
        borderRadius="20px"
      >
        완료
      </Button>
    </ButtonBoxWrap>
  );
}

export default ButtonBox;

const ButtonBoxWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const CancelBtn = styled.button`
  margin-right: 32px;
  width: 83px;
  height: 32px;

  span {
    color: ${({ theme }) => theme.colors.gr_label};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
