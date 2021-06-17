import IssueDetailHeader from "./IssueDetailHeader/IssueDetailHeader";
import IssueContents from "./IssueContents/IssueContents";
import Header from "@/Components/Header/Header";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

const IssueDetail = ({ location }: any) => {
  console.log(location);
  //useEffect로 set된 이슈넘버를 get해옴. 그 후에 issueDetailState에 저장
  return (
    <>
      <Header />
      <S.IssueDetail>
        <IssueDetailHeader />
        <IssueContents />
      </S.IssueDetail>
    </>
  );
};

export default IssueDetail;
