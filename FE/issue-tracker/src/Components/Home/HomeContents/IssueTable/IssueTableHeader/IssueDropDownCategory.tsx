import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IssueTable as S, HomeAssets as Icon } from "../../../HomeStyles";
import DropDown from "./DropDown/DropDown";
import {
  categoryModalOpenState,
  editOpenCloseIssueModalState,
  checkedItemState,
  IssueModalState,
} from "../../../HomeStore";
import StateDropDown from "./DropDown/StateDropDown";

const IssueDropDownCategory = () => {
  const modalTitleMock: string[] = ["담당자", "레이블", "마일스톤", "작성자"];

  const [categModalOpenState, setCategModalOpenState] = useRecoilState(
    categoryModalOpenState
  );

  const [editIssueModalState, setEditIssueModalState] = useRecoilState(
    editOpenCloseIssueModalState
  );

  const [issueModalState, setIssueModalState] = useRecoilState(IssueModalState);

  const checkedItemsCount = useRecoilValue(checkedItemState);
  console.log("크기", checkedItemsCount);
  const handleCategClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCategModalOpenState({
      openedModalTitle: (e.target as HTMLElement).dataset.title,
      isOpen: !categModalOpenState.isOpen,
    });
  };

  const handleIssueStateClick = () => {
    setIssueModalState(!issueModalState);
  };

  useEffect(() => {
    if (checkedItemsCount.size !== 0) setEditIssueModalState(true);
    else setEditIssueModalState(false);
  }, [checkedItemsCount.size]);

  return (
    <S.TableHeaderRight>
      {editIssueModalState ? (
        <S.ThModalWrapDiv>
          <S.TableTh onClick={handleIssueStateClick}>
            상태수정
            <Icon.Down />
          </S.TableTh>
          {issueModalState && <StateDropDown />}
        </S.ThModalWrapDiv>
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
