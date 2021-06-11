import { LabelMilestoneTable as S } from "../../TabStyles";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import Label from "@/Components/AtomicComponents/Label";
import ContentDescription from "./ContentDescription";

const TabContentRow = () => {
  return (
    <S.TableRow>
      <S.TableRowContentLeft>
        <S.LabelWrapper>
          <Label label="JennyJJang" fontColor="white" backgroundColor="green" />
        </S.LabelWrapper>
        <ContentDescription />
      </S.TableRowContentLeft>
      <S.TableRowButtonDiv>
        <EditButton />
        <DeleteButton />
      </S.TableRowButtonDiv>
    </S.TableRow>
  );
};

export default TabContentRow;
