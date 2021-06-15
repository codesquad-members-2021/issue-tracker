import React from "react";
import { useRecoilState } from "recoil";
import { checkedState } from "@/Components/Home/HomeStore";
import { checkedItemState } from "@/Components/Home/HomeStore";

type CheckButtonProps = {
  issueId: number;
};

const CheckButton = ({ issueId }: CheckButtonProps) => {
  const [checked, setChecked] = useRecoilState(checkedState);
  const [checkedItemList, setCheckedItemList] =
    useRecoilState(checkedItemState);

  const handleCheckedItem = (issueId: number, isChecked: boolean) => {
    if (isChecked) {
      checkedItemList.add(issueId);
      setCheckedItemList(checkedItemList);
    } else if (!isChecked && checkedItemList.has(issueId)) {
      checkedItemList.delete(issueId);
      setCheckedItemList(checkedItemList);
    }
    console.log(checkedItemList.has(issueId));
  };

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked); //일종의 리렌더링을 위한 트리거?처럼 쓰고있는데 이게 맞을까?
    handleCheckedItem(issueId, e.target.checked);
  };

  return (
    <input
      checked={checkedItemList.has(issueId)}
      type="checkbox"
      onChange={handleCheckboxClick}
    />
  );
};

export default CheckButton;
