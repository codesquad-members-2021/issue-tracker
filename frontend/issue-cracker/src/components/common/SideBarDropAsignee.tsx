import React from 'react';
import styled from 'styled-components';
import { ProfileImg as S, Text as T } from '../styles/CommonStyles';
import { useRecoilValue } from 'recoil';
import { decodedToken } from '../../store/Recoil';
import CheckOffIcon from '../styles/svg/CheckOffIcon';

const SideBarDropAsignee = (): JSX.Element => {
  const decoded = decodedToken && useRecoilValue(decodedToken);
  const profileURL = decoded && decoded.profileImageUrl;
  const profileName = decoded && decoded.name;
  return (
    <SideBarDropAsigneeStyle>
      <DropLeft>
        <S.ProfileImgSmall src={profileURL}></S.ProfileImgSmall>
        <ProfileName>{profileName}</ProfileName>
      </DropLeft>
      <DropRight>
        <CheckOffIcon />
      </DropRight>
    </SideBarDropAsigneeStyle>
  );
};
export default SideBarDropAsignee;

const SideBarDropAsigneeStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ProfileName = styled(T.TextSmall)`
  margin-left: 8px;
`;
const DropLeft = styled.div`
  display: flex;
  align-items: center;
`;
const DropRight = styled.div``;
