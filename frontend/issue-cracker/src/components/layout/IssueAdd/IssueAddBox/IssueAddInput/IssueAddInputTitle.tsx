import React from 'react';
import InputGroup from '../../../../common/group/InputGroup';
import styled from 'styled-components';
import { ProfileImg as P } from '../../../../styles/CommonStyles';
import { TYPE as T } from '../../../../../utils/const';
const IssueAddInputTitle = (): JSX.Element => {
  const profileURL = localStorage.getItem('profileImageUrl');
  return (
    <IssueAddInputTitleStyle>
      <ProfileImgStyle>
        {profileURL && <P.ProfileImgLarge src={profileURL} />}
      </ProfileImgStyle>
      <InputGroupStyle>
        <InputGroup type={T.MEDIUM} name="제목" variant="outlined" />
      </InputGroupStyle>
    </IssueAddInputTitleStyle>
  );
};

export default IssueAddInputTitle;

const IssueAddInputTitleStyle = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImgStyle = styled.div`
  padding: 10px;
`;

const InputGroupStyle = styled.div`
  width: 100%;

  div {
    width: 100%;
    background: ${({ theme }) => `${theme.colors.gray5}`};
    border-radius: 16px;

    div {
      :focus-within {
        background: #fff;
      }
    }
  }

  fieldset {
    border: 1px solid ${({ theme }) => `${theme.colors.gray5}`};
  }
`;
