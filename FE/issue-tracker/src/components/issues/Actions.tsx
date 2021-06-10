import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@chakra-ui/button';

import Tabs from '@components/common/Tabs';
import FilterBar from './FilterBar';

function Actions() {
  return (
    <ActionsWrap>
      <SearchWrap>
        <FilterBar />
        <Tabs page="" />
      </SearchWrap>
      <Link to="/new-issue">
        <Button
          width="120px"
          fontSize="xs"
          marginLeft="16px"
          background="bl_initial"
          colorScheme="blue"
        >
          + 이슈 작성
        </Button>
      </Link>
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
