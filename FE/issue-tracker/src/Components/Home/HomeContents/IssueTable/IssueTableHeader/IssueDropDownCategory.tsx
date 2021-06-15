import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IssueTable as S, HomeAssets as Icon } from "../../../HomeStyles";
import DropDown from "./DropDown/DropDown";
import {
  categoryModalOpenState,
  editOpenCloseIssueModalState,
  checkedItemState,
  checkedItemsCountState,
} from "../../../HomeStore";

const IssueDropDownCategory = () => {
  const modalTitleMock: string[] = ["담당자", "레이블", "마일스톤", "작성자"];

  const [categModalOpenState, setCategModalOpenState] = useRecoilState(
    categoryModalOpenState
  );

  const [editIssueModalState, setEditIssueModalState] = useRecoilState(
    editOpenCloseIssueModalState
  );

  const checkedItemsCount = useRecoilValue(checkedItemState);
  console.log("크기", checkedItemsCount);
  const handleCategClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCategModalOpenState({
      openedModalTitle: (e.target as HTMLElement).dataset.title,
      isOpen: !categModalOpenState.isOpen,
    });
  };

  useEffect(() => {
    if (checkedItemsCount.size !== 0) setEditIssueModalState(true);
    else setEditIssueModalState(false);
  }, [checkedItemsCount.size]);

  return (
    <S.TableHeaderRight>
      {editIssueModalState ? (
        <S.TableTh>
          상태수정
          <Icon.Down />
        </S.TableTh>
      ) : (
        modalTitleMock.map((modalTitle) => (
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
        ))
      )}
    </S.TableHeaderRight>
  );
};

export default IssueDropDownCategory;
