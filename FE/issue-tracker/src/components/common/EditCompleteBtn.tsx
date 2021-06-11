import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
import { ReactComponent as Edit } from '@assets/edit.svg';
import { ReactComponent as Cancel } from '@assets/cancel.svg';

function CompleteBtn() {
  return (
    <ButtonBox>
      <Button {...completeButton}>
        <Edit className="icon_edit" />
        완료
      </Button>
      <Button {...whiteButton} marginRight="8px">
        <Cancel className="icon_cancel" />
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
  background: 'white',
  color: 'bl_initial',
  border: '2px solid #007AFF',
};

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
