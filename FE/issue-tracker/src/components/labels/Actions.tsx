import styled from 'styled-components';
import Tabs from '@components/common/Tabs';
import { Button } from '@chakra-ui/react';

interface Props {
  page: string;
}

function Actions({ page }: Props) {
  return (
    <ActionsWrap>
      <Tabs page={page} />
      <Button
        width="120px"
        fontSize="xs"
        background="bl_initial"
        colorScheme="blue"
      >
        + 추가
      </Button>
    </ActionsWrap>
  );
}

export default Actions;

const ActionsWrap = styled.section`
  /* theme에 추가하기 */
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;
