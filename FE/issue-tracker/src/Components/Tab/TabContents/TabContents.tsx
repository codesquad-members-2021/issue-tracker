import { LabelMilestoneTable as S } from "../TabStyles";
import TabContentRow from "./TabContentRow/TabContentRow";
import TabContentsHeader from "./TabContentsHeader";

const TabContents = () => {
  return (
    <S.IssueTable>
      <TabContentsHeader />
      <S.TableBody>
        {[...Array(3)].map((v) => (
          <TabContentRow />
        ))}
      </S.TableBody>
    </S.IssueTable>
  );
};

export default TabContents;
