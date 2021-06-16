import { useRecoilValue } from "recoil";
import { issueDetailState } from "@/Components/IssueDetail/IssueDetailStore";
import SettingSideBar from "@/Components/AtomicComponents/SettingSideBar/SettingSideBar";
import CommentBox from "./CommentBox/CommentBox";
import IssueDeleteButton from "./IssueDeleteButton";
import TextArea from "@/Components/AtomicComponents/TextArea/TextArea";
import SubmitButton from "./SubmitButton";
import UserImage from "./UserImage";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

const IssueContents = () => {
  const issue = useRecoilValue(issueDetailState);

  const handleOnChange = () => {};
  return (
    <S.IssueContentsWrapper>
      <S.IssueContents>
        {issue.comment.map((comment) => (
          <CommentBox key={comment.id} comment={comment} />
        ))}
        <S.TextAreaWrapper>
          <UserImage imgUrl={issue.author.image_url} />
          <TextArea
            placeholder={"코멘트를 입력하세요"}
            rows={10}
            handleOnChange={handleOnChange}
          />
        </S.TextAreaWrapper>
        <SubmitButton innerText={"코멘트 작성"} />
      </S.IssueContents>
      <S.NavWrapper>
        <SettingSideBar />
        <IssueDeleteButton />
      </S.NavWrapper>
    </S.IssueContentsWrapper>
  );
};

export default IssueContents;
