import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { hoverGrey } from 'style/Theme';
interface UserProps {
  imageURL: string
  name: string

}
//contentList=assignees.map((assignee)=><UserSelectItem key={assignee.id} imgURL={assignee.image}>{assignee.userName}</UserSelectItem>)


export default function UserSelectItem({imageURL, name}: UserProps): ReactElement {
  return (
  <UserSelectItemBlock>
    <div className='user-select__info'>
      <div className="user-select__image">
        <img src={imageURL} alt='user-image' width='20' height='20'/>
      </div>
      <div className='user-select__name'>{name}</div>
    </div>
  </UserSelectItemBlock>
  )
}

const UserSelectItemBlock = styled(hoverGrey)`
cursor: pointer;
.user-select__info{
  width: 240px;
  padding: 12px 16px;
}
div{
  display: flex;
}
.user-select__image{
  img { 
    border-radius: 50%;
    margin-right: 8px;
  }
};
.user-select__name {
  color: ${({theme})=>theme.color.fontBlack};
}`;
