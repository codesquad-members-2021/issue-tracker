import { useRecoilValue } from "recoil";
import { LabelMilestoneTable as S, TabAssets as Icon } from "../TabStyles";
import { currentTabState } from "../TabStore";

const TabContentsHeader = () => {
  const tabState = useRecoilValue(currentTabState);

  return (
    <S.TableHeader>
      {tabState === "label" ? (
        <S.TableHeaderLeft>
          <S.TableTh>3개의 레이블</S.TableTh>
        </S.TableHeaderLeft>
      ) : (
        <S.TableHeaderLeft>
          <S.TableTh>
            <Icon.MilestoneTag />
            열린 마일스톤(2)
          </S.TableTh>
          <S.TableTh>
            <Icon.CloseMileStoneTag />
            닫힌 마일스톤(0)
          </S.TableTh>
        </S.TableHeaderLeft>
      )}
    </S.TableHeader>
  );
};

export default TabContentsHeader;
