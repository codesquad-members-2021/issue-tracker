import React from 'react';
import {
  Issue as S,
  Text as T,
  ProfileImg as P,
} from '../../../styles/CommonStyles';
import CheckBoxes from '../../../common/CheckBoxes';
import IssueOpenIcon from '../../../styles/svg/IssueOpenIcon';
import styled from 'styled-components';
import LabelSmallGroup from '../../../common/group/LabelSmallGroup';
import { Link } from 'react-router-dom';
import { decodedToken } from '../../../../store/Recoil';
import { useRecoilValue } from 'recoil';

const IssueCell = (): JSX.Element => {
  const decoded = decodedToken && useRecoilValue(decodedToken);
  const profileURL = decoded && decoded.profileImageUrl;

  return (
    <S.IssueCell>
      <LeftBox>
        <CheckBoxes />
        <IssueCellContent>
          <Link
            to={{
              pathname: '/main/issue-detail/1',
              state: {
                issueNumber: 1,
                title: '맛있는 저녁 메뉴 선정',
                content: '뭘 먹을까?! 피그 인 더 가든?!',
                isOpen: true,
                writer: 'ink-O',
                date: '',
              },
            }}
          >
            <IssueUpper>
              <IssueOpenIcon
                color="#3f51b5"
                style={{ width: 24, height: 24 }}
              />
              <IssueTitle>맛있는 저녁 메뉴 선정</IssueTitle>
              <LabelSmallGroup
                color={'#fff'}
                backgroundColor={'#1E4174'}
                label="밥에 관한 것"
              ></LabelSmallGroup>
            </IssueUpper>
          </Link>
          <T.TextSmall color="#6E7191">
            <IssueLower>
              <IssueID>#1</IssueID>
              <IssueContent>
                이 이슈가8분전 ,ink-0님에 의해 작성되었습니다
              </IssueContent>
              <IssueMileStone>마스터즈 코스</IssueMileStone>
            </IssueLower>
          </T.TextSmall>
        </IssueCellContent>
      </LeftBox>
      <RightBox>
        {profileURL && <P.ProfileImgSmall src={profileURL} />}
      </RightBox>
    </S.IssueCell>
  );
};

export default IssueCell;

const LeftBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 40px;
`;
const IssueCellContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
const IssueUpper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const IssueLower = styled.div`
  display: flex;
  flex-direction: row;
`;
const IssueID = styled.div``;
const IssueContent = styled.div`
  margin: 0 16px;
`;
const IssueMileStone = styled.div``;
const IssueTitle = styled.div`
  font-weight: 600;
  margin: 0 9px;
`;
