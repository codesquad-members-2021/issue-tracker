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

  const handleOnChange = () => {};

  return (
    <S.CommentBox>
      <UserImage imgUrl={comment.author.image_url} />
      <Comment isShow={isShow} comment={comment} />
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
          <SubmitButton innerText={"편집 완료"} />
        </S.IssueButtonWrapper>
      </S.CommentEditBox>
    </S.CommentBox>
  );
};

export default CommentBox;
