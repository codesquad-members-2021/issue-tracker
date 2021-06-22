import React from 'react';
import styled from 'styled-components';
import CheckOffIcon from '../../styles/svg/CheckOffIcon';
import LabelColorIcon from '../../styles/svg/LabelColorIcon';
import { Text as S } from '../../styles/CommonStyles';

interface SideBarDropLabelProps {
  data: {
    id: number;
    title: string;
    description: string;
    background_color_hexa: string;
    text_color_hexa: string;
  };
}
const SideBarDropLabel = ({ data }: SideBarDropLabelProps): JSX.Element => {
  return (
    <SideBarDropLabelStyle>
      <DropLeft>
        <LabelColorIcon color="#DDA94B" />
        <LabelName>{data.title}</LabelName>
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
