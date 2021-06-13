import { LabelMilestoneTable as S } from "../../TabStyles";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import Label from "@/Components/AtomicComponents/Label";
import ContentDescription from "./ContentDescription";
import { toggleEditLabelState } from "../../TabStore";
import { useRecoilValue } from "recoil";
import LabelEditModal from "../../TabModal/Label/LabelEditModal";

type tabContentProp = {
  id: number;
};

const TabContentRow = ({ id }: tabContentProp) => {
  const EditLabelState = useRecoilValue(toggleEditLabelState);

  return (
    <>
      {EditLabelState.isOpen && id === EditLabelState.rowId ? (
        <LabelEditModal />
      ) : (
        <S.TableRow>
          <S.TableRowContentLeft>
            <S.LabelWrapper>
              <Label
                label="JennyJJang"
                fontcolor="white"
                backgroundcolor="green"
              />
            </S.LabelWrapper>
            <ContentDescription />
          </S.TableRowContentLeft>
          <S.TableRowButtonDiv>
            <EditButton id={id} />
            <DeleteButton />
          </S.TableRowButtonDiv>
        </S.TableRow>
      )}
    </>
  );
};

export default TabContentRow;
