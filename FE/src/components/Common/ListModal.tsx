import React, { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';

import { filterSelectionAtom, filterVisibleAtom } from 'util/store/issueList';
import { TIssueListFilterType } from 'util/reference';
import CircleCheckBox from './CircleCheckBox';
import Modal from './Modal';
import { useEffect } from 'react';

interface IListItemImgType {
  // color: labelColor | image: userImage | text: onlyText (noCheckbox)
  imgType?: 'color' | 'image' | 'text';
  imgUrl?: string;
  color?: string;
}

interface IListModal {
  rightPos?: string;
  data?: TIssueListFilterType;
}

const MODAL_CLOSE_TIME = 200;

const ListModal = ({ rightPos, data, ...props }: IListModal) => {
  // 1. 일반
  const { title, items, type } = data!;

  const [filterSelectionState, setFilterSelectionState] = useRecoilState(filterSelectionAtom);
  const [, setFilterVisibleState] = useRecoilState(filterVisibleAtom);

  const [arrCurrChecked, setArrCurrChecked] = useState<string[]>([]);
  const [isCheckboxUpdate, setIsCheckboxUpdate] = useState(false);

  // =========

  // 2. useEffect
  useEffect(() => {
    if (!isCheckboxUpdate) return;
    setFilterSelectionState({ ...filterSelectionState, [type]: arrCurrChecked })
    setIsCheckboxUpdate(false);
  }, [isCheckboxUpdate]);

  // 3. events
  const handleCircleCheckboxClick = (e: React.MouseEvent | Event) => {
    const target = e.target as HTMLInputElement;

    // 현재 ListModal의 Type이 레이블(Label)일 경우에만 동작하는 함수
    const clickCheckboxForTypeLabel = (checked: boolean) => {
      if (checked)
        setArrCurrChecked((arrCurrChecked) => {
          let newArr: string[] = [];
          if (arrCurrChecked.includes('noLabel'))
            newArr = [...arrCurrChecked.filter((name) => name !== 'noLabel'), target.name];
          else
            target.name === 'noLabel'
              ? (newArr = [target.name])
              : (newArr = arrCurrChecked.concat(target.name));
          return newArr;
        })
      else setArrCurrChecked(arrCurrChecked.filter((name) => name !== target.name));
    }

    if (type === 'label') clickCheckboxForTypeLabel(target.checked)
    else {
      target.checked
        ? (
          setArrCurrChecked([target.name]),
          setTimeout(() => setFilterVisibleState((filterVisibleState) => ({ ...filterVisibleState, [type]: false })), MODAL_CLOSE_TIME)
        )
        : setArrCurrChecked([]);
    }
    setIsCheckboxUpdate(true);
  };

  const renderItems = useCallback(
    () =>
      items.map(({ imgType, name, text, color, imgUrl }, idx) => (
        <MenuLabelTag key={idx}>
          <MenuTextBlock>
            {imgType !== 'text' && (color || imgUrl) && (
              <MenuImageBlock imgType={imgType} color={color} imgUrl={imgUrl} />
            )}
            {text || name}
          </MenuTextBlock>
          {imgType !== 'text' && (
            <CircleCheckBox
              color="default"
              name={name}
              onClick={handleCircleCheckboxClick}
              checked={filterSelectionState[type].includes(name)}
            />
          )}
        </MenuLabelTag>
      )),
    [items, filterSelectionState],
  );
  // =========

  return (
    <ListModalLayout {...props} rightPos={rightPos}>
      {/* Title */}
      <ListModalRow type="title">
        <MenuTitle>{title}</MenuTitle>
      </ListModalRow>

      {/* Menu Item - html: label tag */}
      <ListModalRow type="items">{renderItems()}</ListModalRow>
    </ListModalLayout>
  );
};

export default ListModal;

// --- Styled Components ---
// 1. 메인 (큰 틀)
const ListModalLayout = styled(Modal) <{ rightPos?: string }>`
  position: absolute;
  z-index: 99;

  flex-direction: column;
  font-size: 0.9rem;
  border-radius: 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.line};

  top: 0.2rem;
  right: ${({ rightPos }) => (rightPos ? rightPos : 'auto')};
`;

const ListModalRow = styled.div<{ type: 'title' | 'items' }>`
  min-width: 14rem;
  display: flex;
  flex-direction: column;

  border-radius: ${({ type }) =>
    type === 'title' ? `0.6rem 0.6rem 0 0` : `0 0 0.6rem 0.6rem`};
  background-color: ${({ type, theme }) =>
    type === 'title'
      ? theme.colors.grayScale.bgColor
      : theme.colors.grayScale.offWhite};
`;
// =====

// 2. 일반
const cssFlexMenu = css`
  display: flex;
  align-items: center;
  padding: 0.65rem 0.5rem;
`;

// title
const MenuTitle = styled.p`
  ${cssFlexMenu};
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.grayScale.title};
  user-select: none;
`;

// item - html: label tag
const MenuLabelTag = styled.label`
  ${cssFlexMenu};
  cursor: pointer;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  color: ${({ theme }) => theme.colors.grayScale.body};
`;

const MenuTextBlock = styled.span`
  display: flex;
  align-items: center;
  column-gap: 0.2rem;
  user-select: none;
  font-size: 0.9rem;
`;

const MenuImageBlock = styled.div<IListItemImgType>`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.line};

  ${({ imgType, imgUrl }) =>
    imgType === 'image' &&
    css`
      min-width: 1.2rem;
      min-height: 1.2rem;
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url(${imgUrl});
    `}

  ${({ imgType, color }) =>
    imgType === 'color' &&
    css`
      min-width: 1rem;
      min-height: 1rem;
      background-color: ${color};
    `}
`;
