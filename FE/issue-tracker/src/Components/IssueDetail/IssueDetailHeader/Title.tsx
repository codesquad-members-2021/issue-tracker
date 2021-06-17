import { useRecoilValue, useRecoilState } from "recoil";
import {
  issueDetailState,
  editTitleFlagState,
} from "@/Components/IssueDetail/IssueDetailStore";
import TextArea from "@/Components/AtomicComponents/TextArea/TextArea";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

const Title = () => {
  const issue = useRecoilValue(issueDetailState);
  const editTitleFlag = useRecoilValue(editTitleFlagState);
  const [issueTitle, setIssueTitle] = useRecoilState(issueDetailState);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIssueTitle({ ...issueTitle, title: e.target.value });
  };

  return editTitleFlag ? (
    <TextArea
      placeholder={issue.title}
      rows={1}
      handleOnChange={handleOnChange}
    />
  ) : (
    <S.Title>{issue.title}</S.Title>
  );
};

export default Title;
