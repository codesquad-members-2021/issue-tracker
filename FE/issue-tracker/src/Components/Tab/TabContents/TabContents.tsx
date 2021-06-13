import { LabelMilestoneTable as S } from "../TabStyles";
import TabContentRow from "./TabContentRow/TabContentRow";
import TabContentsHeader from "./TabContentsHeader";
import { currentTabState } from "../TabStore";
import { useRecoilValue } from "recoil";

const TabContents = () => {
  const tabState = useRecoilValue(currentTabState);

  return (
    <S.IssueTable>
      <TabContentsHeader />
      <S.TableBody>
        {tabState === "label"
          ? [...Array(3)].map((v, i) => <TabContentRow id={i} key={i} />)
          : [...Array(4)].map((v, i) => <TabContentRow id={i} key={i} />)}
      </S.TableBody>
    </S.IssueTable>
  );
};

export default TabContents;
