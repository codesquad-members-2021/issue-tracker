import CloseIcon from "@material-ui/icons/Close";
import { NewIssue as S } from "@/Components/NewIssue/NewIssueStyles";

const UnCreateButton = () => {
  return (
    <S.UnCreateButton startIcon={<CloseIcon />}>작성 취소</S.UnCreateButton>
  );
};

export default UnCreateButton;
