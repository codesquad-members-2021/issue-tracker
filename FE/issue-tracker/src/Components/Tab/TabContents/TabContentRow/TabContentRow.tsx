import { LabelMilestoneTable as S } from "../../TabStyles";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import Label from "@/Components/AtomicComponents/Label";
import ContentDescription from "./ContentDescription";
import { toggleEditLabelState, currentTabState } from "../../TabStore";
import { useRecoilValue } from "recoil";
import LabelEditModal from "../../TabModal/Label/LabelEditModal";
import ContentTitle from "./ContentTitle";

type tabContentProp = {
  id: number;
};

const TabContentRow = ({ id }: tabContentProp) => {
  const EditLabelState = useRecoilValue(toggleEditLabelState);
  const tabState = useRecoilValue(currentTabState);

  return (
    <>
      {tabState === "label" ? (
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
      ) : (
        <>
          <S.TableRow>
            <S.TableRowContentLeft>
              <S.TableRowContentLeftCol>
                <ContentTitle />
                <ContentDescription />
              </S.TableRowContentLeftCol>
            </S.TableRowContentLeft>
            <S.TableRowButtonDiv>
              <EditButton id={id} />
              <DeleteButton />
            </S.TableRowButtonDiv>
          </S.TableRow>
        </>
      )}
    </>
  );
};

export default TabContentRow;
