import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Tabs from './Tabs';
import Buttons from '../../../styles/atoms/Buttons';
import { ReactComponent as Plus } from '../../../icons/plus.svg';

const IssueList = () => {
  return (
    <ListWrapper>
      <Filter />
      <RightListWrapper>
        <Tabs />
        <Buttons initial small>
          <IconWrapper>
            <Plus />
          </IconWrapper>
          이슈 작성
        </Buttons>
      </RightListWrapper>
    </ListWrapper>
  );
};

const IconWrapper = styled.div`
  padding-right: 5px;
  svg {
    stroke: ${props => props.theme.greyscale.offWhite};
  }
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
`;

const RightListWrapper = styled.div`
  display: flex;
`;
export default IssueList;
