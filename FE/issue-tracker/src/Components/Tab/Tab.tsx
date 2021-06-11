import Header from "@/Components/Header/Header";
import TabHeader from "./TabHeader/TabHeader";
import TabContents from "./TabContents/TabContents";
import { TabComponents as S } from "./TabStyles";
import { toggleAddNewLabelState } from "./TabStore";
import { useRecoilValue } from "recoil";
import LabelAddModal from "./TabAddModal/LabelAddModal";

const Tab = () => {
  const toggleAddModalState = useRecoilValue(toggleAddNewLabelState);

  return (
    <>
      <Header />
      <S.TabContainer>
        <TabHeader />
        {toggleAddModalState && <LabelAddModal />}
        <TabContents />
      </S.TabContainer>
    </>
  );
};

export default Tab;
