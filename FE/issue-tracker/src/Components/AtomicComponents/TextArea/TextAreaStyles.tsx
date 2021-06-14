import styled from "styled-components";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";
import Button from "@material-ui/core/Button";

const TextArea = {
  TextAreaWrapper: styled(BOX.FLEX_COLUMN_BOX)`
    width: 100%;
    background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    border-radius: 14px;
  `,
  TextArea: styled.textarea`
    width: 100%;
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    border-radius: 14px;
    padding: 18px 24px;
    background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    border: none;
    outline: none;
    resize: none;
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    :focus {
      transition: all 0.3s;
      border: 1px solid ${theme.GRAY_SCALE.LINE};
      background: ${theme.COLOR.WHITE};
    }
  `,
  FileAttachButtonWrapper: styled.div<{ isShow: boolean }>`
    display: ${(props) => (props.isShow ? "flex" : "none")};
    padding: 8px 0px;
  `,
  FileAttachButton: styled(Button)`
    width: 12%;
    margin-left: 8px;
  `,
};

export { TextArea };
