import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

const IssueDeleteButton = () => {
  const handleOnClick = () => {
    console.log("이슈 삭제 API 사용 예정");
  };

  return (
    <S.IssueDeleteButton onClick={handleOnClick} color="secondary">
      <DeleteOutlineIcon />
      이슈 삭제
    </S.IssueDeleteButton>
  );
};

export default IssueDeleteButton;
