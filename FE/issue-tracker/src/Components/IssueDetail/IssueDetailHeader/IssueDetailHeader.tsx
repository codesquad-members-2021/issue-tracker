import { useRecoilValue } from "recoil";
import { issueDetailState } from "@/Components/IssueDetail/IssueDetailStore";
import Title from "./Title";
import IssueNumber from "./IssueNumber";
import IssueControlButton from "./IssueControlButton";
import Description from "./Description";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

const IssueDetailHeader = () => {
  const issue = useRecoilValue(issueDetailState);

  return (
    <S.IssueDetailHeader>
      <S.HeaderUpper>
        <S.TitleWrapper>
          <Title />
          <IssueNumber />
        </S.TitleWrapper>
        <div>
          <IssueControlButton innerText={"제목 편집"} />
          <IssueControlButton
            innerText={issue.is_open ? "이슈 닫기" : "이슈 열기"}
          />
        </div>
      </S.HeaderUpper>
      <Description />
    </S.IssueDetailHeader>
  );
};

export default IssueDetailHeader;
