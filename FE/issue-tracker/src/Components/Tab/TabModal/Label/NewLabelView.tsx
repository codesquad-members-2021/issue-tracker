import { useRecoilValue } from "recoil";
import Label from "@/Components/AtomicComponents/Label";
import { addNewLabelTitleState } from "../../TabStore";

const NewLabelView = () => {
  const LabelTitle = useRecoilValue(addNewLabelTitleState);

  return <Label backgroundcolor="gray" label={LabelTitle} fontcolor="white" />;
};

export default NewLabelView;
