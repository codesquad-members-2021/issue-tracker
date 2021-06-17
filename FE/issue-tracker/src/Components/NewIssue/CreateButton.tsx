import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import {
  createButtonFlagState,
  newIssueState,
} from "@/Components/NewIssue/NewIssueStore";
import { NewIssue as S } from "@/Components/NewIssue/NewIssueStyles";

const CreateButton = () => {
  const createButtonFlag = useRecoilValue(createButtonFlagState);
  const newIssue = useRecoilValue(newIssueState);

  const handleOnClick = (e: any) => {
    if (e.target.childNodes[0].disabled) e.preventDefault();
    // const body = {
    //   title:newIssue.title,
    //   comment : newIssue.comment,
    //   label_ids : [0,0],
    //   mileStone_id : 0,
    //   assignee_id : [0,0]
    // }
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
