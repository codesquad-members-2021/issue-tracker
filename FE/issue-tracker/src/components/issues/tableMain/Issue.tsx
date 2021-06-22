import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Avatar } from '@chakra-ui/avatar';
import { ReactComponent as MilestoneIcon } from '@assets/milestone.svg';

import Label from '@components/common/Label';
import type { IssueInfo } from './IssueList';

import {
  checkIfDayPassedFromCreation,
  getCreatedTime,
  getRenderingText,
  getTimeGapFromCreation,
  getTime,
  getTotalMinutesBetweenGap,
} from '@utils/renderTimeText';
import pipe from '@utils/pipe';

type Props = {
  info: IssueInfo;
};

function Issue({ info }: Props) {
  const {
    id,
    title,
    author,
    label_list,
    issue_number,
    created_time,
    milestone_title,
  } = info;
  const defaultAvatarPosition = '32px';
  const { user_id, name, avatar_url } = author;

  const currentTime = new Date().getTime();
  const noticeTimePassed = pipe(
    getCreatedTime,
    getTimeGapFromCreation(currentTime),
    getTotalMinutesBetweenGap,
    checkIfDayPassedFromCreation,
    getTime,
    getRenderingText
  )(created_time);

  const linkPath = {
    pathname: `/issues/detail/${id}`,
  };
  return (
    <IssueWrap data-id={id}>
      <IssueContainer>
        <StyledDiv>
          <CheckBox type="checkbox" name="issueCheckBox" />
          <IssueTitle>
            <Link to={linkPath}>
              <h2>{title}</h2>
            </Link>
            {label_list.map(({ id, title, color_code }) => (
              <Label
                key={id}
                name={title}
                colorCode={color_code}
                fontLight={true}
              />
            ))}
          </IssueTitle>
        </StyledDiv>
        <Description>
          <span>#{issue_number}</span>
          <span>
            {name} 및 {noticeTimePassed}
          </span>
          <div>
            <MilestoneIcon />
            <span>{milestone_title}</span>
          </div>
        </Description>
      </IssueContainer>
      <AvatarContainer>
        <AvatarBox>
          <Avatar className="avatar" size="sm" src={avatar_url} />
        </AvatarBox>
      </AvatarContainer>
    </IssueWrap>
  );
}

export default Issue;

interface AvatarPos {
  pos?: string | undefined;
}

const IssueWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.gr_offWhite};
`;

const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 878;
  height: 100px;
  padding: 16px 0 16px 32px;
  position: relative;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  width: 76px;
  height: 32px;
  position: relative;
`;

const AvatarBox = styled.div<AvatarPos>`
  width: auto;
  position: absolute;
  right: ${({ pos }) => pos || '32px'};
`;

const IssueTitle = styled.div`
  display: flex;
  align-items: center;
  height: 32px;

  h2 {
    margin: 0 8px 0 24px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const CheckBox = styled.input`
  width: 16px;
  height: 16px;
`;

const Description = styled.div`
  margin: 8px 0 0 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  span {
    padding-right: 16px;
    color: ${({ theme }) => theme.colors.gr_label};

    &:last-child {
      padding-left: 8px;
    }
  }
`;
