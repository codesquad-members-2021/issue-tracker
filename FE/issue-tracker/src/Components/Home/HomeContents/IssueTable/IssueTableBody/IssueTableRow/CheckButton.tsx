import React from "react";
import { useRecoilState } from "recoil";
import { checkedState } from "@/Components/Home/HomeStore";
import { checkedItemState } from "@/Components/Home/HomeStore";

type CheckButtonProps = {
  id: number;
};

const CheckButton = ({ id }: CheckButtonProps) => {
  const [checked, setChecked] = useRecoilState(checkedState);
  const [checkedItemList, setCheckedItemList] =
    useRecoilState(checkedItemState);

  const handleCheckedItem = (id: number, isChecked: boolean) => {
    if (isChecked) {
      checkedItemList.add(id);
    } else if (!isChecked && checkedItemList.has(id)) {
      checkedItemList.delete(id);
      setCheckedItemList(checkedItemList);
    }
  };

  // console.log(id);

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.closest);
    setChecked(!checked);
    handleCheckedItem(id, e.target.checked);
  };

  // console.log(checkedItemList);

  return <input type="checkbox" onChange={handleCheckboxClick} />;
};

export default CheckButton;
