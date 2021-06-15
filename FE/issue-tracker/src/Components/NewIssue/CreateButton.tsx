import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { createButtonFlagState } from "@/Components/NewIssue/NewIssueStore";
import { NewIssue as S } from "@/Components/NewIssue/NewIssueStyles";

const CreateButton = () => {
  const createButtonFlag = useRecoilValue(createButtonFlagState);

  const handleOnClick = (e: any) => {
    if (e.target.childNodes[0].disabled) e.preventDefault();
    console.log(
      "이슈 등록 -> 저장된 이슈 넘버 받아옴 -> setIssueDetail을 해줌 -> 그러고 나서 움직여야,."
    );
  };

  return (
    <Link
      to={{
        pathname: "/issueDetail",
        state: { issueId: 1 },
      }}
      onClick={handleOnClick}
    >
      <S.CreateButton
        variant="contained"
        color="primary"
        disabled={createButtonFlag}
      >
        완료
      </S.CreateButton>
    </Link>
  );
};

export default CreateButton;
