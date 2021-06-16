import React from 'react';
import styled from 'styled-components';
import { hoverGrey } from 'style/Theme';
import ProfileImg from 'components/atom/ProfileImg';
import { UserType } from 'components/common/tabModal/tapDataType';
import { ReactComponent as RadioButton } from 'assets/icon/RadioButton.svg';

interface UserProps {
  user: UserType;
  selected: boolean;
}

export default function UserSelectItem({ user: { image, userName }, selected }: UserProps) {
  return (
    <UserSelectItemBlock>
      <div className='user-select__info'>
        <div className='user-select__image'>
          <ProfileImg avatarURL={image} isSmall={true} />
        </div>
        <div className='user-select__name'>{userName}</div>
      </div>
      {selected && <RadioButton />}
    </UserSelectItemBlock>
  );
}

const UserSelectItemBlock = styled(hoverGrey)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  .user-select__info {
    display: flex;
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
