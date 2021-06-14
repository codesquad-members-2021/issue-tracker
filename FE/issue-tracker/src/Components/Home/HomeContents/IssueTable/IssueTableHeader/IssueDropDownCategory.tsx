import { useRecoilState } from "recoil";
import { IssueTable as S, HomeAssets as Icon } from "../../../HomeStyles";
import DropDown from "./DropDown/DropDown";
import { categoryModalOpenState } from "../../../HomeStore";

const IssueDropDownCategory = () => {
  const modalTitleMock: string[] = ["담당자", "레이블", "마일스톤", "작성자"];
  const [categModalOpenState, setCategModalOpenState] = useRecoilState(
    categoryModalOpenState
  );

  const handleCategClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCategModalOpenState({
      openedModalTitle: (e.target as HTMLElement).dataset.title,
      isOpen: !categModalOpenState.isOpen,
    });
  };

  return (
    <S.TableHeaderRight>
      {modalTitleMock.map((modalTitle) => (
        <S.ThModalWrapDiv>
          <S.TableTh data-title={modalTitle} onClick={handleCategClick}>
            {modalTitle}
            <Icon.Down />
          </S.TableTh>
          {categModalOpenState.isOpen &&
            modalTitle === categModalOpenState.openedModalTitle && (
              <DropDown modalTitle={modalTitle} />
            )}
        </S.ThModalWrapDiv>
      ))}
    </S.TableHeaderRight>
  );
};

export default IssueDropDownCategory;
