import styled from "styled-components";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

const NewIssue = {
  NewIssue: styled.div`
    width: 100%;
    height: 100%;
  `,
  Title: styled.div`
    font-size: ${theme.FONT_SIZE.DISPLAY};
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    padding: 32px 0px;
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    width: 100%;
  `,
  NewIssueBody: styled(BOX.FLEX_ROW_BOX)`
    padding: 32px 0px 16px 0px;
    width: 100%;
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    margin-bottom: 32px;
  `,
  MyIcon: styled(Avatar)`
    margin-right: 16px;
  `,
  TextAreaWrapper: styled(BOX.FLEX_COLUMN_BOX)`
    width: 100%;
    margin-right: 32px;
  `,
  TextArea: styled.textarea`
    width: 100%;
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    border-radius: 14px;
    padding: 18px 24px;
    background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    border: none;
    outline: none;
    margin-bottom: 16px;
    resize: none;
    :focus {
      transition: all 0.3s;
      border: 1px solid ${theme.GRAY_SCALE.LINE};
      background: ${theme.COLOR.WHITE};
    }
  `,
  FileAttachButton: styled(Button)`
    width: 11.5%;
  `,
  ButtonsWrapper: styled(BOX.FLEX_ROW_BOX)`
    justify-content: flex-end;
  `,
  CreateButton: styled(Button)`
    border-radius: 20px;
    background: ${theme.COLOR.BLUE};
    opacity: 0.5;
    color: ${theme.COLOR.WHITE};
    padding: 16px 24px;
    width: 17%;
    font-size: ${theme.FONT_SIZE.TEXT_MEDIUM};
  `,
  UnCreateButton: styled(Button)`
    width: 8%;
  `,
};

export { NewIssue };
