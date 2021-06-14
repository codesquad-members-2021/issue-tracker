import IssueDetailHeader from "./IssueDetailHeader/IssueDetailHeader";
import IssueContents from "./IssueContents/IssueContents";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

const IssueDetail = () => {
  return (
    <S.IssueDetail>
      <IssueDetailHeader />
      <IssueContents />
    </S.IssueDetail>
  );
};

export default IssueDetail;
