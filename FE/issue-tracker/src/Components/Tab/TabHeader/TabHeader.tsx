import { TabComponents as S, TabAssets as Icon } from "../TabStyles";
import AddTabButton from "./AddTabButton";

const TabHeader = () => {
  return (
    <S.TabHeaderDiv>
      <S.ButtonGroup>
        <S.Button>
          <Icon.LabelTag /> 레이블 (3)
        </S.Button>
        <S.Button>
          <Icon.MilestoneTag />
          마일스톤 (2)
        </S.Button>
      </S.ButtonGroup>
      <AddTabButton />
    </S.TabHeaderDiv>
  );
};

export default TabHeader;
