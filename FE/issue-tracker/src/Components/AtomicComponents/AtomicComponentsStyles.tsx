import styled from "styled-components";
import { Avatar, Chip } from "@material-ui/core";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";

const AvatarDiv = styled(Avatar)<{ size?: number }>`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;

const LabelDiv = styled(Chip)<{ fontColor?: string; backgroundColor?: string }>`
  color: ${({ fontColor }) => (fontColor ? fontColor : "black")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "gray"};
`;

const Modal = {
  ModalDiv: styled(BOX.FLEX_COLUMN_BOX)`
    border-radius: 16px;
    width: 240px;
    height: fit-content;
    z-index: 2;
  `,

  ModalTitleDiv: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
    padding: 0 16px;
    width: 240px;
    height: 44px;
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    font-size: ${theme.FONT_SIZE.TEXT_MEDIUM};
    font-weight: bold;
    background: ${theme.GRAY_SCALE.BACKGROUND};
    border: 1px solid ${theme.GRAY_SCALE.LINE};
    border-radius: 16px 16px 0 0;
  `,

  ModalItemDiv: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    width: 240px;
    height: 44px;
    background-color: ${theme.GRAY_SCALE.OFF_WHITE};
    color: ${theme.GRAY_SCALE.BODY};
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    border-right: 1px solid ${theme.GRAY_SCALE.LINE};
    border-left: 1px solid ${theme.GRAY_SCALE.LINE};
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    &:last-child {
      border-radius: 0 0 16px 16px;
    }
    &:hover {
      background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    }
  `,
};

export { AvatarDiv, LabelDiv, Modal };
