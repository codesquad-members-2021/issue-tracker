import { useRecoilValue } from "recoil";
import { createButtonFlagState } from "@/Components/NewIssue/NewIssueStore";
import { NewIssue as S } from "@/Components/NewIssue/NewIssueStyles";

const CreateButton = () => {
  const createButtonFlag = useRecoilValue(createButtonFlagState);

  return (
    <S.CreateButton
      variant="contained"
      color="primary"
      disabled={createButtonFlag}
    >
      완료
    </S.CreateButton>
  );
};

export default CreateButton;
