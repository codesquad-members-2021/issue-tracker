import { useRecoilValue } from "recoil";
import Header from "@/Components/Header/Header";
import TabHeader from "./TabHeader/TabHeader";
import TabContents from "./TabContents/TabContents";
import { TabComponents as S } from "./TabStyles";
import {
  toggleAddNewLabelState,
  toggleAddNewMilestoneState,
  currentTabState,
} from "./TabStore";
import LabelAddModal from "./TabModal/Label/LabelAddModal";
import MilestoneAddModal from "./TabModal/Milestone/MilestoneAddModal";

const Tab = () => {
  const toggleAddLabelModalState = useRecoilValue(toggleAddNewLabelState);
  const toggleAddMilestoneModalState = useRecoilValue(
    toggleAddNewMilestoneState
  );
  const tabState = useRecoilValue(currentTabState);

  return (
    <>
      <Header />
      <S.TabContainer>
        <TabHeader />
        {tabState === "label" ? (
          <>
            {toggleAddLabelModalState && <LabelAddModal />}
            <TabContents />
          </>
        ) : (
          <>
            {toggleAddMilestoneModalState && <MilestoneAddModal />}
            <TabContents />
          </>
        )}
      </S.TabContainer>
    </>
  );
};

export default Tab;
