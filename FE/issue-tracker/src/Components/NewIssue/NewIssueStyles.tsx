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
    padding-bottom: 32px;
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    width: 100%;
  `,
  NewIssueBody: styled(BOX.FLEX_ROW_BOX)`
    padding: 32px 0px;
    width: 100%;
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    margin-bottom: 32px;
  `,
  MyIcon: styled(Avatar)`
    margin-right: 16px;
  `,
  BodyContentsWrapper: styled.div`
    width: 100%;
  `,
  TextAreaWrapper: styled(BOX.FLEX_COLUMN_BOX)`
    width: 100%;
    margin-bottom: 24px;
  `,
  NavWrapper: styled.div`
    width: 30%;
    margin-right: 30px;
  `,
  ButtonsWrapper: styled(BOX.FLEX_ROW_BOX)`
    justify-content: flex-end;
    align-items: center;
  `,
  CreateButton: styled(Button)`
    border-radius: 20px;
    background: ${theme.COLOR.BLUE};
    opacity: 0.5;
    color: ${theme.COLOR.WHITE};
    padding: 16px 24px;
    margin-left: 40px;
    width: 240px;
    font-size: ${theme.FONT_SIZE.TEXT_MEDIUM};
  `,
  UnCreateButton: styled(Button)`
    width: 100%;
  `,
};

export { NewIssue };
