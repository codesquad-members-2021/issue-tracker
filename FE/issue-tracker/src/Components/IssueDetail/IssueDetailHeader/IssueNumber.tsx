import { useRecoilValue } from "recoil";
import { issueDetailState } from "@/Components/IssueDetail/IssueDetailStore";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

const IssueNumber = () => {
  const issue = useRecoilValue(issueDetailState);
  return <S.IssueNumber>#{issue.number}</S.IssueNumber>;
};

export default IssueNumber;
