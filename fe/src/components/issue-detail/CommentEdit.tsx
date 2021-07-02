import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

import CreateButton from 'components/buttons/CreateButton';
import CommentTextarea from 'components/common/CommentTextarea';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as XSvg } from 'icons/Xicon.svg';
import { instanceWithAuth } from 'api';

import { commentUpdateAtom } from 'stores/detailIssueStore';

const CommentEdit = ({
  defaultValue,
  setIsEditing,
  commentRequestUrl,
}: {
  defaultValue: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  commentRequestUrl: string;
}) => {
  const setCommentUpdate = useSetRecoilState(commentUpdateAtom);
  const [commentValue, setCommentValue] = useState<string>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setCommentValue(e.target.value);

  const handleClickCancelComment = () => {
    setIsEditing(false);
  };

  const handleClickEditComment = () => {
    (async function () {
      await instanceWithAuth.patch(commentRequestUrl, {
        description: commentValue,
      });
      setCommentUpdate((cur) => ++cur);
      setIsEditing(false);
    })();
  };

  return (
    <NewCommentWrapper display="flex">
      <NewCommentInputArea>
        <CommentTextarea value={commentValue} handleChange={handleChange} />
      </NewCommentInputArea>

      <NewCommentButtonArea>
        <CreateButton
          onClick={handleClickCancelComment}
          icon={<CancelIcon />}
          white
        >
          편집 취소
        </CreateButton>
        <CreateButton onClick={handleClickEditComment} icon={<EditIcon />}>
          편집 완료
        </CreateButton>
      </NewCommentButtonArea>
    </NewCommentWrapper>
  );
};

export default CommentEdit;

const NewCommentWrapper = styled(Box)`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NewCommentInputArea = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const NewCommentButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelIcon = styled(XSvg)`
  path {
    stroke: inherit;
  }
`;

const EditIcon = styled(EditSvg)`
  path {
    stroke: inherit;
  }
`;
