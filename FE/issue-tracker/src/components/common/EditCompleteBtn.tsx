import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
import { ReactComponent as EditIcon } from '@assets/edit.svg';
import { ReactComponent as CancelIcon } from '@assets/cancel.svg';

function CompleteBtn() {
  return (
    <ButtonBox>
      <Button {...completeButton}>
        <EditIcon className="edit_icon" />
        완료
      </Button>
      <Button {...whiteButton} marginRight="8px">
        <CancelIcon className="cancel_icon" />
        취소
      </Button>
    </ButtonBox>
  );
}

export default CompleteBtn;

const completeButton = {
  width: '120px',
  fontSize: 'xs',
  background: 'bl_initial',
  colorScheme: 'blue',
  color: 'white',
};

const whiteButton = {
  width: '120px',
  fontSize: 'xs',
  fontWeight: 'medium',
  background: 'white',
  color: 'bl_initial',
  border: '2px solid #007AFF',
};

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
