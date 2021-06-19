import React from 'react';
import styled from 'styled-components';
import CheckOffIcon from '../styles/svg/CheckOffIcon';
import LabelColorIcon from '../styles/svg/LabelColorIcon';
import { Text as S } from '../styles/CommonStyles';
const SideBarDropLabel = (): JSX.Element => {
  return (
    <SideBarDropLabelStyle>
      <DropLeft>
        <LabelColorIcon color="#DDA94B" />
        <LabelName>ink-0</LabelName>
      </DropLeft>
      <DropRight>
        <CheckOffIcon />
      </DropRight>
    </SideBarDropLabelStyle>
  );
};

export default SideBarDropLabel;

const SideBarDropLabelStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const LabelName = styled(S.TextSmall)`
  margin-left: 8px;
`;
const DropLeft = styled.div`
  display: flex;
`;
const DropRight = styled.div``;
