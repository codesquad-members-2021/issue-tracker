import { useRecoilState, useRecoilValue } from "recoil";
import { checkedItemState, IssueList } from "@/Components/Home/HomeStore";

const TotalIssueCheckButton = () => {
  const [checkedItemList, setCheckedItemList] =
    useRecoilState(checkedItemState);
  const Issues = useRecoilValue(IssueList);

  const handletotalCheck = () => {
    if (Issues.length === checkedItemList.size) {
      checkedItemList.clear();
      setCheckedItemList(new Set(checkedItemList.values()));
    } else {
      Issues.forEach((issue) => checkedItemList.add(issue.id));
      setCheckedItemList(new Set(checkedItemList.values()));
    }
  };

  console.log(checkedItemList);

  return (
    <input
      checked={checkedItemList.size === Issues.length}
      type="checkbox"
      onChange={handletotalCheck}
    />
  );
};

export default TotalIssueCheckButton;
