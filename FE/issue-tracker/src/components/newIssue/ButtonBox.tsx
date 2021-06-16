import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import { ReactComponent as CancelIcon } from '@assets/cancel.svg';

function ButtonBox() {
  return (
    <ButtonBoxWrap>
      <Link to="issues">
        <CancelBtn>
          <CancelIcon className="cancel_icon" />
          <span>작성취소</span>
        </CancelBtn>
      </Link>
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
  display: flex;
  align-items: center;
  .cancel_icon {
    margin-right: 5px;
    path {
      stroke: ${({ theme }) => theme.colors.gr_label};
    }
  }
  span {
    color: ${({ theme }) => theme.colors.gr_label};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
