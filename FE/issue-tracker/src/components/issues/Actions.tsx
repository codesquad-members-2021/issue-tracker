import styled from 'styled-components';

import Tabs from '@components/common/Tabs';
import { Button } from '@chakra-ui/button';

import FilterBar from './FilterBar';

function Actions() {
  return (
    <ActionsWrap>
      <SearchWrap>
        <FilterBar />
        <Tabs page="labels" />
      </SearchWrap>
      <Button marginLeft="16px" background="bl_initial" colorScheme="blue">
        + 이슈 작성
      </Button>
    </ActionsWrap>
  );
}

export default Actions;

const ActionsWrap = styled.section`
  display: flex;
  width: 100%;
`;

const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
