import { useRecoilState } from "recoil";
import { editCommentBoxState } from "@/Components/IssueDetail/IssueDetailStore";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

interface Props {
  innerText: string;
  commentId?: number;
  editComment?: string;
  issueNumber?: number;
  newComment?: string;
  disabled?: boolean;
}

const SubmitButton = ({ innerText, disabled }: Props) => {
  const [editCommentBox, setEditCommentBox] =
    useRecoilState(editCommentBoxState);
  const makeButton = () => {
    if (innerText === "코멘트 작성") {
      return (
        <S.IssueSubmitButton
          data-is-outlined={false}
          disabled={disabled}
          variant="contained"
          color="primary"
          onClick={() => {
            // POST(issueNumber,newComment)
          }}
        >
          <AddIcon />
          코멘트 작성
        </S.IssueSubmitButton>
      );
    } else if (innerText === "편집 완료") {
      return (
        <S.IssueSubmitButton
          data-is-outlined={false}
          disabled={disabled}
          variant="contained"
          color="primary"
          onClick={
            () => setEditCommentBox({ ...editCommentBox, isShow: false })
            // PATCH(commentId,editComment)
          }
        >
          <BorderColorIcon />
          편집 완료
        </S.IssueSubmitButton>
      );
    } else {
      return (
        <S.IssueSubmitButton
          data-is-outlined={true}
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
