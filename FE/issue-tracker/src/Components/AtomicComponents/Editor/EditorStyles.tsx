import styled from "styled-components";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";
import MDEditor from "@uiw/react-md-editor";

const Editor = {
  EditorWrapper: styled(BOX.FLEX_COLUMN_BOX)`
    width: 100%;
    border-radius: 14px;
    background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    border: 1px solid ${theme.GRAY_SCALE.LINE};
  `,
  Editor: styled(MDEditor)`
    border-radius: 14px;
    padding: 0px 14px;
    background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    :focus-within {
      transition: all 0.3s;
      border: 1px solid ${theme.GRAY_SCALE.LINE};
      background: ${theme.COLOR.WHITE};
    }
  `,
  FileAttachButtonWrapper: styled.div`
    padding: 8px 0px;
  `,
  FileAttachButton: styled.label`
    display: flex;
    align-items: center;
    margin-left: 4px;
    padding: 8px 0px;
    opacity: 0.75;
    :hover {
      transition: all 0.3s;
      opacity: 1;
    }
    span {
      margin-left: 5px;
    }
  `,
};

export { Editor };
