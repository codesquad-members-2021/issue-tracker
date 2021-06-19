import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Issue as S } from '../styles/CommonStyles';
import { TYPE as T } from '../../utils/const';
import { SIDEBAR_MENU } from '../../utils/const';
import { v4 as uuidv4 } from 'uuid';
import TextGroup from '../common/group/TextGroup';
import AddIcon from '@material-ui/icons/Add';
import LabelSmallGroup from './group/LabelSmallGroup';
import jwtDecode from 'jwt-decode';
import { useSetRecoilState } from 'recoil';
import { decodedToken } from '../../store/Recoil';
import { ProfileImg as P } from '../styles/CommonStyles';
import ProgressBar from '../common/ProgrerssBar';
import SideBarDropDown from '../common/SideBarDropDown';
interface TokenProps {
  name: string;
  profileImageUrl: string;
}

const SideBar = (): JSX.Element => {
  const token = localStorage.getItem('token');
  const decoded = token && jwtDecode<TokenProps>(token);
  const setDecodedToken = useSetRecoilState(decodedToken);

  useEffect(() => {
    decoded &&
      setDecodedToken({
        name: decoded.name,
        profileImageUrl: decoded.profileImageUrl,
      });
  }, []);

  const profileURL = decoded && decoded.profileImageUrl;
  const profileName = decoded && decoded.name;

  return (
    <SideBarStyle>
      <SideBarCell>
        <SideBarTitle>
          <TextGroup type={T.SMALL} content={'담당자'} color="#6E7191" />
          <CustomAddIcon />
          <SideBarDropDown />
        </SideBarTitle>
        <SideBarContent>
          <div>
            {profileURL && <P.ProfileImgLarge src={profileURL} />}
            <AccountName>{profileName}</AccountName>
          </div>
          <div>
            {profileURL && <P.ProfileImgLarge src={profileURL} />}
            <AccountName>{profileName}</AccountName>
          </div>
        </SideBarContent>
      </SideBarCell>
      <SideBarCell>
        <SideBarTitle>
          <TextGroup type={T.SMALL} content={'레이블'} color="#6E7191" />
          <CustomAddIcon />
        </SideBarTitle>
        <SideBarContent>
          <LabelSmallGroup
            color={'#fff'}
            backgroundColor={'#DDA94B'}
            label="라벨 생성"
          />
          <LabelSmallGroup
            color={'#fff'}
            backgroundColor={'#DDA94B'}
            label="라벨 하이"
          />
        </SideBarContent>
      </SideBarCell>
      <SideBarCell>
        <SideBarTitle>
          <TextGroup type={T.SMALL} content={'마일스톤'} color="#6E7191" />
          <CustomAddIcon />
        </SideBarTitle>
        <SideBarContent>
          <ProgressBar />
        </SideBarContent>
      </SideBarCell>
    </SideBarStyle>
  );
};

export default SideBar;

const SideBarStyle = styled.div``;

const SideBarCell = styled(S.IssueCell)`
  min-height: 96px;
  height: fit-content;
  padding: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;

  :first-child {
    border-radius: 16px 16px 0px 0px;
    border: 1px solid #d9dbe9;
  }
`;

const CustomAddIcon = styled(AddIcon)`
  font-size: 16px;
  color: #6e7191;
  cursor: pointer;
`;

const AccountName = styled.div`
  margin: 4px 4px;
  color: ${({ theme }) => theme.colors.gray2};
  font-family: 'Montserrat', sans-serif;
`;
const SideBarTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 18px;
`;
const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  div {
    display: flex;
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;
