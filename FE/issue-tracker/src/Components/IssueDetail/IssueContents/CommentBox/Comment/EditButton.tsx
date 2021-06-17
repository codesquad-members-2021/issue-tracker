import { useSetRecoilState } from "recoil";
import { editCommentBoxState } from "@/Components/IssueDetail/IssueDetailStore";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

interface Props {
  id: number;
  isShow: boolean;
}

const EditButton = ({ id, isShow }: Props) => {
  const setEditCommentBox = useSetRecoilState(editCommentBoxState);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const issueId = Number(
      (e.target as HTMLElement).closest("button")?.dataset.issueId
    );
    setEditCommentBox({ isShow: true, id: issueId });
  };

  return (
    <S.EditButton
      data-issue-id={id}
      onClick={handleOnClick}
      data-is-show={isShow}
    >
      <S.EditIcon />
      편집
    </S.EditButton>
  );
};

export default EditButton;
