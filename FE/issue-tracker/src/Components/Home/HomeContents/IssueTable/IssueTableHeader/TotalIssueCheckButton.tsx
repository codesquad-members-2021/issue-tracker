import { useRecoilState, useRecoilValue } from "recoil";
import {
  checkedItemState,
  IssueList,
  checkedState,
} from "@/Components/Home/HomeStore";

const TotalIssueCheckButton = () => {
  const [checkedItemList, setCheckedItemList] =
    useRecoilState(checkedItemState);
  const [checked, setChecked] = useRecoilState(checkedState);
  const Issues = useRecoilValue(IssueList);

  const handletotalCheck = () => {
    //
    if (Issues.length === checkedItemList.size) {
      setChecked(!checked);
      checkedItemList.clear();
      setCheckedItemList(checkedItemList);
    } else {
      setChecked(!checked);
      Issues.forEach((issue) => checkedItemList.add(issue.id));
      setCheckedItemList(checkedItemList);
    }
  };
  console.log(checkedItemList);
  return <input type="checkbox" onChange={handletotalCheck} />;
};

export default TotalIssueCheckButton;
