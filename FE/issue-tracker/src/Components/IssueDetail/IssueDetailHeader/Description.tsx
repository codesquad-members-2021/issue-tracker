import { useRecoilValue } from "recoil";
import { issueDetailState } from "@/Components/IssueDetail/IssueDetailStore";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

const Description = () => {
  const issue = useRecoilValue(issueDetailState);
  const issueState = issue.is_open ? "열렸" : "닫혔";
  const issueStateBadgeText = issue.is_open ? "열린" : "닫힌";
  const description = `이슈가 ${issue.created_time} 전에 ${issue.author.name}님에 의해 ${issueState}습니다 • 코멘트 ${issue.comment.length}개`;
  return (
    <S.Description>
      <S.IssueStateBadge isOpen={issue.is_open}>
        ✪ {issueStateBadgeText} 이슈
      </S.IssueStateBadge>
      {description}
    </S.Description>
  );
};

export default Description;
