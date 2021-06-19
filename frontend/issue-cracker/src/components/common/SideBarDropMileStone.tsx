import React from 'react';
import styled from 'styled-components';
import CheckOffIcon from '../styles/svg/CheckOffIcon';
import { Text as S } from '../styles/CommonStyles';

const SideBarDropLabel = (): JSX.Element => {
  return (
    <SideBarDropMileStoneStyle>
      <DropLeft>
        <MileStoneName>이슈트래커 2주차</MileStoneName>
      </DropLeft>
      <DropRight>
        <CheckOffIcon />
      </DropRight>
    </SideBarDropMileStoneStyle>
  );
};

export default SideBarDropLabel;

const SideBarDropMileStoneStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const MileStoneName = styled(S.TextSmall)`
  margin-left: 8px;
`;
const DropLeft = styled.div`
  display: flex;
`;
const DropRight = styled.div``;
