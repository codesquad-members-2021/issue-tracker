import React from "react";
import { useRecoilState } from "recoil";
import { checkedItemState } from "@/Components/Home/HomeStore";

type CheckButtonProps = {
  issueId: number;
};

const CheckButton = ({ issueId }: CheckButtonProps) => {
  const [checkedItemList, setCheckedItemList] =
    useRecoilState(checkedItemState);

  const handleCheckedItem = (issueId: number, isChecked: boolean) => {
    if (isChecked) {
      checkedItemList.add(issueId);
      setCheckedItemList(new Set(checkedItemList.values()));
    } else if (!isChecked && checkedItemList.has(issueId)) {
      checkedItemList.delete(issueId);
      setCheckedItemList(new Set(checkedItemList.values()));
    }
  };

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
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
