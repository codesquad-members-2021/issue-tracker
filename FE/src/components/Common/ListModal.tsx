import { useCallback } from 'react';
import styled, { css } from 'styled-components';
import CircleCheckBox from './CircleCheckBox';
import Modal, { IModal } from './Modal';

interface IListItemImgType {
  // color: labelColor | image: userImage | text: onlyText (noCheckbox)
  imgType?: 'color' | 'image' | 'text';
  imgUrl?: string;
  color?: string;
}

interface IListItem extends IListItemImgType {
  name: string;
  text: string;
}

interface IListModal extends IModal {
  data: {
    title: string;
    items: IListItem[];
  };
}

// TEST DATA
export const testData: IListItem[] = [
  {
    name: 'open',
    text: '열린 이슈',
    imgType: 'color',
    color: '#000',
  },
  {
    name: 'close',
    text: '닫힌 이슈',
    imgType: 'image',
    imgUrl: 'https://avatars.githubusercontent.com/u/33610315?s=60&v=4',
  },
  {
    name: 'close',
    text: '내가 작성한 이슈',
    imgType: 'text',
  },
];
// -----

const ListModal = ({ data, isModalVisible, modalType, ...props }: IListModal) => {
  const { title, items } = data;

  const renderItems = useCallback(
    () =>
      items.map(({ imgType, name, text, color, imgUrl }, idx) => (
        <MenuLabelTag key={idx}>
          <MenuTextBlock>
            {imgType !== 'text' && (color || imgUrl) && (
              <MenuImageBlock imgType={imgType} color={color} imgUrl={imgUrl} />
            )}
            {text}
          </MenuTextBlock>
          {imgType !== 'text' && <CircleCheckBox color="default" name={name} />}
        </MenuLabelTag>
      )),
    [items],
  );

  return (
    <ListModalLayout
      {...props}
      modalType={modalType}
      isModalVisible={isModalVisible}
    >
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
const ListModalLayout = styled(Modal)`
  position: absolute;
  z-index: 99;

  flex-direction: column;
  font-size: 0.9rem;
  border-radius: 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.line};
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
`;

const MenuImageBlock = styled.div<IListItemImgType>`
  border-radius: 50%;

  ${({ imgType, imgUrl }) =>
    imgType === 'image' &&
    css`
      min-width: 1.2rem;
      min-height: 1.2rem;
      border: 1px solid ${({ theme }) => theme.colors.grayScale.line};
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
