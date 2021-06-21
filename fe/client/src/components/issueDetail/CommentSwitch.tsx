import React from 'react'
import CommentItem from './CommentItem';
import CommentEdit from './CommentEdit';
import { CommentsType } from '@components/common/types/IssueDetailType';
import styled from 'styled-components';
import useToggle from '@/utils/hook/useToggle';

const CommentSwitch = ({ comments, isWriter }: { comments: CommentsType, isWriter: boolean }) => {
  const [isEdit, setToggleEdit] = useToggle(false);

  return (
    <CommentSwitchWrapper>
      <ImageTag src="https://user-images.githubusercontent.com/61257242/121417591-0d02b480-c9a5-11eb-9c7e-d926e8731bfb.png" />
      <div>
        {isEdit
          ? <CommentEdit {...{setToggleEdit}} />
          : <CommentItem {...{ comments, isWriter, setToggleEdit }} />
        }
      </div>
    </CommentSwitchWrapper>
  )
}

const CommentSwitchWrapper = styled.div`
  display: flex;
  width: 100%;
  > div{
    width: 100%;
  }
  & + & {
    margin-top:24px;
  }
`;

const ImageTag = styled.img`
  width: 44px;
  height:44px;
  margin-right: 16px;
  border-radius:50%;
`;

export default CommentSwitch;
