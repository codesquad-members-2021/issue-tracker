import Header from "@/Components/Header/Header";
import TabHeader from "./TabHeader/TabHeader";
import TabContents from "./TabContents/TabContents";
import { TabComponents as S } from "./TabStyles";
import { toggleAddNewLabelState, currentTabState } from "./TabStore";
import { useRecoilValue } from "recoil";
import LabelAddModal from "./TabModal/Label/LabelAddModal";

const Tab = () => {
  const toggleAddModalState = useRecoilValue(toggleAddNewLabelState);
  const tabState = useRecoilValue(currentTabState);

  return (
    <>
      <Header />
      <S.TabContainer>
        <TabHeader />
        {tabState === "label" ? (
          <>
            {toggleAddModalState && <LabelAddModal />}
            <TabContents />
          </>
        ) : (
          <>
            <TabContents />
          </>
        )}
      </S.TabContainer>
    </>
  );
};

export default Tab;
