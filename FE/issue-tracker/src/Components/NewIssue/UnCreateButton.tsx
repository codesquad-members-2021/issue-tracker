import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { NewIssue as S } from "@/Components/NewIssue/NewIssueStyles";

const UnCreateButton = () => {
  return (
    <Link to="/">
      <S.UnCreateButton startIcon={<CloseIcon />}>작성 취소</S.UnCreateButton>
    </Link>
  );
};

export default UnCreateButton;
