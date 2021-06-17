import { useState } from "react";
import { useRecoilValue } from "recoil";
import { editCommentBoxState } from "@/Components/IssueDetail/IssueDetailStore";
import UserImage from "../UserImage";
import Comment from "./Comment/Comment";
import Editor from "@/Components/AtomicComponents/Editor/Editor";
import SubmitButton from "../SubmitButton";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

interface Props {
  comment: any;
}

const CommentBox = ({ comment }: Props) => {
  const editCommentBox = useRecoilValue(editCommentBoxState);
  const isShow = editCommentBox.isShow && comment.id === editCommentBox.id;
  const [editComment, setEditComment] = useState(comment.content);
  const [disalbed, setDisabled] = useState(true);

  const handleOnChange = (e: any) => {
    if (e.length <= 0) setDisabled(true);
    else setDisabled(false);
    setEditComment(e);
  };

  return (
    <S.CommentBox>
      <UserImage imgUrl={comment.author.image_url} />
      <Comment isShow={isShow} comment={comment} editComment={editComment} />
      <S.CommentEditBox data-is-show={isShow}>
        <Editor
          value={comment.content}
          height={200}
          visiableDragbar={false}
          hideToolbar={true}
          handleOnChange={handleOnChange}
        />
        <S.IssueButtonWrapper>
          <SubmitButton innerText={"편집 취소"} />
          <SubmitButton
            innerText={"편집 완료"}
            commentId={comment.id}
            editComment={editComment}
            disabled={disalbed}
          />
        </S.IssueButtonWrapper>
      </S.CommentEditBox>
    </S.CommentBox>
  );
};

export default CommentBox;
