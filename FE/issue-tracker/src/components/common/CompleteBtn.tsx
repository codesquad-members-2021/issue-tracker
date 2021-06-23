import styled from 'styled-components';
import { Button } from '@chakra-ui/react';

function CompleteBtn() {
  return (
    <ButtonBox>
      <Button {...completeButton}>+ 완료</Button>
    </ButtonBox>
  );
}

export default CompleteBtn;

export const completeButton = {
  width: '120px',
  fontSize: 'xs',
  background: 'bl_initial',
  colorScheme: 'blue',
  color: 'white',
};

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
