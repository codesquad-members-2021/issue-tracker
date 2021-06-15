import {
  IssueTable as S,
  HomeAssets as Icon,
} from "@/Components/Home/HomeStyles";

type issueTitleProps = {
  issueTitle: string;
};

const IssueTitle = ({ issueTitle }: issueTitleProps) => {
  return (
    <S.IssueInfoTitle>
      <Icon.IssueMark fillcolor="#C7EBFF" />
      {issueTitle}
    </S.IssueInfoTitle>
  );
};

export default IssueTitle;
