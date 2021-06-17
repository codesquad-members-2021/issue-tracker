import {
  IssueTable as S,
  HomeAssets as Icon,
} from "@/Components/Home/HomeStyles";

const IssueDescription = () => {
  return (
    <S.IssueInfoBottom>
      <span>#이슈번호</span>
      <span>작성자 및 타임스탬프 정보</span>
      <span>
        <Icon.MilestoneTag />
        마일스톤
      </span>
    </S.IssueInfoBottom>
  );
};

export default IssueDescription;
