import React from 'react';
import styled from 'styled-components';
import { ProfileImg as P, Issue as S } from '../../../../styles/CommonStyles';

const IssueDetailDisplay = (): JSX.Element => {
  const profileURL = localStorage.getItem('profileImageUrl');
  return (
    <IssueAddInputTitleStyle>
      <DisplayWrapper>
        <ProfileImgStyle>
          {profileURL && <P.ProfileImgLarge src={profileURL} />}
        </ProfileImgStyle>
        <DisplayBox>
          <S.IssueTableHeader></S.IssueTableHeader>
          <S.IssueCell></S.IssueCell>
        </DisplayBox>
      </DisplayWrapper>
      <DisplayWrapper>
        <ProfileImgStyle>
          {profileURL && <P.ProfileImgLarge src={profileURL} />}
        </ProfileImgStyle>
        <DisplayBox>
          <S.IssueTableHeader></S.IssueTableHeader>
          <S.IssueCell></S.IssueCell>
        </DisplayBox>
      </DisplayWrapper>
    </IssueAddInputTitleStyle>
  );
};

export default IssueDetailDisplay;

const IssueAddInputTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImgStyle = styled.div`
  margin-top: 15px;
  padding: 10px;
`;

const DisplayWrapper = styled.div`
  display: flex;
`;

const DisplayBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
