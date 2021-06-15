import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { hoverGrey } from 'style/Theme';
import ProfileImg from 'components/atom/ProfileImg';
interface UserProps {
  imageURL: string;
  name: string;
}

export default function UserSelectItem({ imageURL, name }: UserProps): ReactElement {
  return (
    <UserSelectItemBlock>
      <div className='user-select__info'>
        <div className='user-select__image'>
          <ProfileImg avatarURL={imageURL} isSmall={true} />
        </div>
        <div className='user-select__name'>{name}</div>
      </div>
    </UserSelectItemBlock>
  );
}

const UserSelectItemBlock = styled(hoverGrey)`
  cursor: pointer;
  .user-select__info {
    width: 240px;
    padding: 12px 16px;
  }
  div {
    display: flex;
  }
  .user-select__image {
    margin-right: 8px;
  }
  .user-select__name {
    color: ${({ theme }) => theme.color.fontBlack};
  }
`;
