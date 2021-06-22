import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Issue as S } from '../../styles/CommonStyles';
import { TYPE as T } from '../../../utils/const';

import TextGroup from '../group/TextGroup';
import AddIcon from '@material-ui/icons/Add';
import jwtDecode from 'jwt-decode';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  decodedToken,
  dropAsigneeState,
  dropLabelState,
  dropMilestoneState,
} from '../../../store/Recoil';
import SideBarDrop from './SideBarDrop';
import { userData } from '../../../utils/mock/userData';
import AssigneeData from './data/AssigneeData';
import LabelData from './data/LabelData';
import MilestoneData from './data/MilestoneData';

import AssigneeContent from './content/AssigneeContent';
import LabelContent from './content/LabelContent';
import MilestoneContent from './content/MilestoneContent';

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

  const dropAssigneeElement = useRef<HTMLDivElement>(null);
  const dropLabelElement = useRef<HTMLDivElement>(null);
  const dropMilestoneElement = useRef<HTMLDivElement>(null);

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
      if (dropAssigneeElement.current?.contains(e.target as Node)) {
        setIsDropLabel(false);
        setIsDropMilestone(false);
        return;
      }
      if (dropLabelElement.current?.contains(e.target as Node)) {
        setIsDropAsignee(false);
        setIsDropMilestone(false);
        return;
      }
      if (dropMilestoneElement.current?.contains(e.target as Node)) {
        setIsDropAsignee(false);
        setIsDropLabel(false);
        return;
      }
      setIsDropAsignee(false);
      setIsDropLabel(false);
      setIsDropMilestone(false);
    };
    document.addEventListener('mousedown', dropCloseHandler);
    return () => {
      document.removeEventListener('mousedown', dropCloseHandler);
    };
  }, []);

  const profileURL = decoded && decoded.profileImageUrl;
  const profileName = decoded && decoded.name;

  const [userList, labelList, milestoneList] = [
    userData.assignees,
    userData.labels,
    userData.milestones,
  ];

  return (
    <SideBarStyle>
      <SideBarCell>
        <SideBarTitle>
          <TextGroup type={T.SMALL} content={'담당자'} color="#6E7191" />
          <CustomAddIcon onClick={() => dropAsigneeHandler()} />
          <SideBarDropDiv ref={dropAssigneeElement}>
            {isDropAsignee && (
              <SideBarDrop
                type={'담당자'}
                dataComponent={<AssigneeData {...{ userList }} />}
              />
            )}
          </SideBarDropDiv>
        </SideBarTitle>
        <SideBarContent>
          <AssigneeContent
            userList={[
              {
                email: 'tami@naver.com',
                name: 'tami',
                avatar_url: 'url',
              },
              {
                email: 'tami@naver.com',
                name: 'tami',
                avatar_url: 'url',
              },
            ]}
          />
        </SideBarContent>
      </SideBarCell>
      <SideBarCell>
        <SideBarTitle>
          <TextGroup type={T.SMALL} content={'레이블'} color="#6E7191" />
          <CustomAddIcon onClick={() => dropLabelHandler()} />
          <SideBarDropDiv ref={dropLabelElement}>
            {isDropLabel && (
              <SideBarDrop
                type={'레이블'}
                dataComponent={<LabelData {...{ labelList }} />}
              />
            )}
          </SideBarDropDiv>
        </SideBarTitle>

        <SideBarContent>
          <LabelContent
            labelList={[
              {
                id: 1,
                title: '밥먹기',
                background_color_hexa: '#DDA94B',
                text_color_hexa: '#fff',
              },
            ]}
          />
        </SideBarContent>
      </SideBarCell>
      <SideBarCell>
        <SideBarTitle>
          <TextGroup type={T.SMALL} content={'마일스톤'} color="#6E7191" />
          <CustomAddIcon onClick={() => dropMilestoneHandler()} />
          <SideBarDropDiv ref={dropMilestoneElement}>
            {isDropMilestone && (
              <SideBarDrop
                type={'마일스톤'}
                dataComponent={<MilestoneData {...{ milestoneList }} />}
              />
            )}
          </SideBarDropDiv>
        </SideBarTitle>
        <SideBarContent>
          <MilestoneContent
            milestoneList={[
              {
                id: 1,

                title: '1',
                description: 'tami',
                due_date: '2021-06-22',
              },
              {
                id: 2,
                title: '2',
                description: 'raccoon',
                due_date: '2021-06-22',
              },
            ]}
          />
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
