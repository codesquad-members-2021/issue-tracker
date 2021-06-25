import styled from 'styled-components';

import { Skeleton, SkeletonCircle } from '@chakra-ui/skeleton';
import { Avatar } from '@chakra-ui/avatar';

// 프로필 이미지 스켈레톤
export const ProfileSkeleton = <SkeletonCircle size="10" isLoaded={false} />;

// 라벨 스켈레톤
export function LabelSkeleton() {
  return <Skeleton height="20px" width="40px" borderRadius="16px" />;
}

export function IssueSkeleton() {
  return (
    <IssueWrap>
      <IssueContainer>
        <StyledDiv>
          <CheckBox type="checkbox" name="issueCheckBox" />
          <IssueTitle>
            <Skeleton height="20px" width="100px" />
            <Skeleton height="20px" width="60px" />
            <Skeleton height="20px" width="60px" />
          </IssueTitle>
        </StyledDiv>
        <Description>
          <Skeleton height="20px" width="30px" />
          <Skeleton height="20px" width="80px" />
          <Skeleton height="20px" width="80px" />
        </Description>
      </IssueContainer>
      <AvatarContainer>
        <AvatarBox>
          <Avatar className="avatar" size="sm" src="./janmang.jpeg" />
        </AvatarBox>
      </AvatarContainer>
    </IssueWrap>
  );
}

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

  div {
    margin: 0 4px 0 12px;
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
  margin: 8px 0 0 28px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    margin-right: 16px;
  }
`;
