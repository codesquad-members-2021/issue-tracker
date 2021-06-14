import Title from "./Title";
import IssueNumber from "./IssueNumber";
import IssueControlButton from "./IssueControlButton";
import Description from "./Description";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

const IssueDetailHeader = () => {
  return (
    <S.IssueDetailHeader>
      <S.HeaderUpper>
        <S.TitleWrapper>
          <Title />
          <IssueNumber />
        </S.TitleWrapper>
        <div>
          <IssueControlButton innerText={"제목 편집"} />
          <IssueControlButton innerText={"이슈 닫기"} />
        </div>
      </S.HeaderUpper>
      <Description />
    </S.IssueDetailHeader>
  );
};

export default IssueDetailHeader;
