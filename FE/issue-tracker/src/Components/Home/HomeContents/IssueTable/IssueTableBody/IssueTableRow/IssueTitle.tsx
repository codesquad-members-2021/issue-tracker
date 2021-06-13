import {
  IssueTable as S,
  HomeAssets as Icon,
} from "@/Components/Home/HomeStyles";

const IssueTitle = () => {
  return (
    <S.IssueInfoTitle>
      <Icon.IssueMark fillcolor="#C7EBFF" />
      이슈제목
    </S.IssueInfoTitle>
  );
};

export default IssueTitle;
