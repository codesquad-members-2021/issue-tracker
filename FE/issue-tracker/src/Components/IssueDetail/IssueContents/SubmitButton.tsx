import { useRecoilState } from "recoil";
import { editCommentBoxState } from "@/Components/IssueDetail/IssueDetailStore";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

interface Props {
  innerText: string;
}

const SubmitButton = ({ innerText }: Props) => {
  const [editCommentBox, setEditCommentBox] =
    useRecoilState(editCommentBoxState);
  const makeButton = () => {
    if (innerText === "코멘트 작성") {
      return (
        <S.IssueSubmitButton
          isOutlined={false}
          variant="contained"
          color="primary"
        >
          <AddIcon />
          코멘트 작성
        </S.IssueSubmitButton>
      );
    } else if (innerText === "편집 완료") {
      return (
        <S.IssueSubmitButton
          isOutlined={false}
          variant="contained"
          color="primary"
        >
          <BorderColorIcon />
          편집 완료
        </S.IssueSubmitButton>
      );
    } else {
      return (
        <S.IssueSubmitButton
          isOutlined={true}
          variant="outlined"
          color="primary"
          onClick={() =>
            setEditCommentBox({ ...editCommentBox, isShow: false })
          }
        >
          <CloseIcon />
          편집 취소
        </S.IssueSubmitButton>
      );
    }
  };

  return <S.IssueButtonWrapper>{makeButton()}</S.IssueButtonWrapper>;
};

export default SubmitButton;
