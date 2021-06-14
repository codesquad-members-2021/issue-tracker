import UserName from "./UserName";
import Time from "./Time";
import AuthorLabel from "./AuthorLabel";
import EditButton from "./EditButton";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

interface Props {
  comment: any;
  isShow: boolean;
}

const Comment = ({ isShow, comment }: Props) => {
  return (
    <S.Comment isShow={isShow}>
      <S.CommentUpper>
        <S.LeftWrapper>
          <UserName username={comment.author.name} />
          <Time createdTime={comment.created_time} />
        </S.LeftWrapper>
        <S.RightWrapper>
          <AuthorLabel isShow={comment.is_mine} />
          <EditButton id={comment.id} isShow={comment.is_mine} />
          <SentimentSatisfiedIcon />
        </S.RightWrapper>
      </S.CommentUpper>
      <S.CommentBottom>{comment.content}</S.CommentBottom>
    </S.Comment>
  );
};

export default Comment;
