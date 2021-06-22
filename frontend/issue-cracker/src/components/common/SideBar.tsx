import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Issue as S } from '../styles/CommonStyles';
import { TYPE as T, SIDEBAR_TYPE as ST } from '../../utils/const';
import { SIDEBAR_MENU } from '../../utils/const';
import { v4 as uuidv4 } from 'uuid';
import TextGroup from '../common/group/TextGroup';
import AddIcon from '@material-ui/icons/Add';
import LabelSmallGroup from './group/LabelSmallGroup';
import jwtDecode from 'jwt-decode';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  decodedToken,
  dropAsigneeState,
  dropLabelState,
  dropMilestoneState,
} from '../../store/Recoil';
import { ProfileImg as P } from '../styles/CommonStyles';
import ProgressBar from './ProgressBar';
import SideBarDrop from './SideBarDrop';
import { userData } from '../../utils/mock/userData';
interface TokenProps {
  name: string;
  profileImageUrl: string;
}

const SideBar = (): JSX.Element => {
  const token = localStorage.getItem('token');
  const decoded = token && jwtDecode<TokenProps>(token);
  const setDecodedToken = useSetRecoilState(decodedToken);
  const [isDropAsignee, setIsDropAsignee] = useRecoilState(dropAsigneeState);
  const [isDropLabel, setIsDropLabel] = useRecoilState(dropLabelState);
  const [isDropMilestone, setIsDropMilestone] =
    useRecoilState(dropMilestoneState);
  const dropDownElement = useRef<HTMLDivElement>(null);

  const dropAsigneeHandler = () => {
    setIsDropAsignee(!isDropAsignee);
  };
  const dropLabelHandler = () => {
    setIsDropLabel(!isDropLabel);
  };
  const dropMilestoneHandler = () => {
    setIsDropMilestone(!isDropMilestone);
  };

  useEffect(() => {
    decoded &&
      setDecodedToken({
        name: decoded.name,
        profileImageUrl: decoded.profileImageUrl,
      });

    const dropCloseHandler = (e: MouseEvent): void => {
      if (
        dropDownElement.current &&
        !dropDownElement.current.contains(e.target as Node)
      ) {
        setIsDropAsignee(false);
        setIsDropLabel(false);
        setIsDropMilestone(false);
      }
    };
    document.addEventListener('mousedown', dropCloseHandler);
    return () => {
      document.removeEventListener('mousedown', dropCloseHandler);
    };
  }, []);

  const profileURL = decoded && decoded.profileImageUrl;
  const profileName = decoded && decoded.name;
  // const userList = userData[0].assignees.users;

  const [userList, labelList, milestoneList] = [
    userData.assignees.users,
    userData.labels.labels,
    userData.milestones,
  ];

  return (
    <SideBarStyle>
      <SideBarCell>
        <SideBarTitle>
          <TextGroup type={T.SMALL} content={'담당자'} color="#6E7191" />
          <CustomAddIcon onClick={() => dropAsigneeHandler()} />
          <SideBarDropDiv ref={dropDownElement}>
            {isDropAsignee && (
              <SideBarDrop type={'담당자'} assigneeData={userList} />
            )}
          </SideBarDropDiv>
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
          <CustomAddIcon onClick={() => dropLabelHandler()} />
          <SideBarDropDiv ref={dropDownElement}>
            {isDropLabel && (
              <SideBarDrop type={'레이블'} labelData={labelList} />
            )}
          </SideBarDropDiv>
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
          <CustomAddIcon onClick={() => dropMilestoneHandler()} />
          <SideBarDropDiv ref={dropDownElement}>
            {isDropMilestone && (
              <SideBarDrop type={'마일스톤'} milestoneData={milestoneList} />
            )}
          </SideBarDropDiv>
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

const SideBarDropDiv = styled.div`
  position: absolute;
  left: -7px;
  top: 30px;
  z-index: 10;
`;
