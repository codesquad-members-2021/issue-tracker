import { TabComponents as S, TabAssets as Icon } from "../TabStyles";
import AddTabButton from "./AddTabButton";
import { useSetRecoilState } from "recoil";
import { currentTabState } from "../TabStore";

const TabHeader = () => {
  const setTabState = useSetRecoilState(currentTabState);

  const handleTabClick = (state: string) => {
    setTabState(state);
  };

  return (
    <S.TabHeaderDiv>
      <S.ButtonGroup>
        <S.Button onClick={() => handleTabClick("label")}>
          <Icon.LabelTag /> 레이블 (3)
        </S.Button>
        <S.Button onClick={() => handleTabClick("milestone")}>
          <Icon.MilestoneTag />
          마일스톤 (2)
        </S.Button>
      </S.ButtonGroup>
      <AddTabButton />
    </S.TabHeaderDiv>
  );
};

export default TabHeader;
