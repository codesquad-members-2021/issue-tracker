import styled from "styled-components";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import BorderColorIcon from "@material-ui/icons/BorderColor";

const IssueDetail = {
  IssueDetail: styled.div`
    width: 100%;
    margin-top: 30px;
  `,
  IssueDetailHeader: styled.div`
    width: 100%;
    padding: 30px 0px;
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
  `,
  HeaderUpper: styled(BOX.FLEX_ROW_BOX)`
    width: 100%;
    justify-content: space-between;
  `,
  TitleWrapper: styled(BOX.FLEX_ROW_CENTER_BOX)`
    width: 80%;
    font-size: ${theme.FONT_SIZE.DISPLAY};
    margin-bottom: 20px;
  `,
  Title: styled.div`
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
  `,
  IssueNumber: styled.div`
    color: ${theme.GRAY_SCALE.LABEL};
    margin-left: 16px;
  `,
  Description: styled(BOX.FLEX_ROW_CENTER_BOX)`
    font-size: ${theme.FONT_SIZE.TEXT_MEDIUM};
    color: ${theme.GRAY_SCALE.BODY};
  `,
  IssueStateBadge: styled.div<{ isOpen: boolean }>`
    background: ${(props) =>
      props.isOpen ? theme.COLOR.LIGHT_BLUE : theme.COLOR.LIGHT_RED};
    color: ${(props) => (props.isOpen ? theme.COLOR.BLUE : theme.COLOR.RED)};
    border: 1px solid
      ${(props) => (props.isOpen ? theme.COLOR.BLUE : theme.COLOR.RED)};
    border-radius: 30px;
    padding: 16px;
    font-size: 14px;
    margin-right: 16px;
  `,
  IssueControlButton: styled(Button)`
    border-radius: 11px;
    color: ${theme.COLOR.BLUE};
    border: 2px solid ${theme.COLOR.BLUE};
    :not(:last-child) {
      margin-right: 16px;
    }
  `,
  IssueContentsWrapper: styled(BOX.FLEX_ROW_BOX)`
    padding: 32px 0px;
  `,
  IssueContents: styled(BOX.FLEX_COLUMN_BOX)`
    width: 100%;
    margin-right: 32px;
  `,
  TextAreaWrapper: styled(BOX.FLEX_ROW_BOX)`
    width: 100%;
    margin: 24px 0px;
  `,
  NavWrapper: styled(BOX.FLEX_COLUMN_BOX)`
    align-items: flex-end;
    width: 30%;
  `,
  IssueButtonWrapper: styled(BOX.FLEX_ROW_BOX)`
    justify-content: flex-end;
    margin-top: 16px;
  `,
  IssueDeleteButton: styled(Button)``,
  IssueSubmitButton: styled(Button)<{ isOutlined: boolean }>`
    margin-left: 16px;
    border-radius: 11px;
    background: ${(props) =>
      props.isOutlined ? theme.COLOR.WHITE : theme.COLOR.BLUE};
    border: 2px solid ${theme.COLOR.BLUE};
    color: ${(props) =>
      props.isOutlined ? theme.COLOR.BLUE : theme.COLOR.WHITE};
    padding: 10px 24px;
  `,
  CommentBox: styled(BOX.FLEX_ROW_BOX)`
    width: 100%;
    margin-bottom: 24px;
  `,
  CommentEditBox: styled(BOX.FLEX_COLUMN_BOX)<{ isShow: boolean }>`
    display: ${(props) => (props.isShow ? "flex" : "none")};
    width: 100%;
    margin-bottom: 24px;
  `,
  UserImage: styled(Avatar)`
    margin-right: 16px;
  `,
  Comment: styled.div<{ isShow: boolean }>`
    display: ${(props) => (!props.isShow ? "block" : "none")};
    width: 100%;
    border: 1px solid ${theme.GRAY_SCALE.LINE};
    border-radius: 16px;
    background: ${theme.COLOR.WHITE};
    color: ${theme.GRAY_SCALE.LABEL};
  `,
  CommentUpper: styled(BOX.FLEX_ROW_BOX)`
    justify-content: space-between;
    width: 100%;
    background: ${theme.GRAY_SCALE.BACKGROUND};
    padding: 14px 24px;
    border-radius: 16px 16px 0px 0px;
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
  `,
  CommentBottom: styled.div`
    width: 100%;
    padding: 18px 24px;
    border-radius: 0px 0px 16px 16px;
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
  `,
  LeftWrapper: styled(BOX.FLEX_ROW_CENTER_BOX)``,
  RightWrapper: styled(BOX.FLEX_ROW_CENTER_BOX)``,
  UserName: styled.div`
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    margin-right: 8px;
  `,
  Time: styled.div`
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
  `,
  AuthorLabel: styled.div<{ isShow: boolean }>`
    display: ${(props) => (props.isShow ? "block" : "none")};
    padding: 4px 16px;
    border: 1px solid ${theme.GRAY_SCALE.LINE};
    border-radius: 30px;
    margin-right: 20px;
  `,
  EditButton: styled(Button)<{ isShow: boolean }>`
    display: ${(props) => (props.isShow ? "flex" : "none")};
    font-size: ${theme.FONT_SIZE.TEXT_X_SMALL};
    margin-right: 20px;
  `,
  EditIcon: styled(BorderColorIcon)`
    width: 15px;
    height: 15px;
    margin-right: 5px;
  `,
};

export { IssueDetail };
