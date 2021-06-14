import styled from "styled-components";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";

const SettingSideBar = {
  SettingSideBar: styled.div`
    width: 100%;
    height: 267px;
    background: ${theme.GRAY_SCALE.OFF_WHITE};
    border: 1px solid ${theme.GRAY_SCALE.LINE};
    border-radius: 16px;
    margin: 0px 0px 20px 32px;
  `,
  SettingSideBarItem: styled(BOX.FLEX_ROW_CENTER_BOX)`
    position: relative;
    justify-content: space-between;
    padding: 20px 40px;
    color: ${theme.GRAY_SCALE.LABEL};
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    font-weight: 700;
    :not(:last-child) {
      border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    }
  `,
  SettingDropDown: styled.div<{ isShow: boolean }>`
    position: absolute;
    top: 60%;
    left: 7%;
    width: 86%;
    display: ${(props) => (props.isShow ? "block" : "none")};
    background: ${theme.GRAY_SCALE.OFF_WHITE};
    border: 1px solid ${theme.GRAY_SCALE.LINE};
    border-radius: 16px;
    z-index: 1;
  `,
  Title: styled.div`
    padding: 16px;
    background: ${theme.GRAY_SCALE.BACKGROUND};
    border-radius: 16px 16px 0px 0px;
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    font-weight: 400;
    font-size: ${theme.FONT_SIZE.TEXT_MEDIUM};
  `,
  Item: styled(BOX.FLEX_ROW_CENTER_BOX)`
    justify-content: space-between;
    padding: 16px;
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    font-weight: 400;
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    :not(:last-child) {
      border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    }
  `,
  LeftItems: styled(BOX.FLEX_ROW_CENTER_BOX)``,
  UserImage: styled(Avatar)`
    width: 20px;
    height: 20px;
    margin-right: 16px;
  `,
  Label: styled.div`
    width: 16px;
    height: 16px;
    margin-right: 16px;
    border-radius: 50%;
    background: red;
  `,
  ItemCheckBox: styled(Checkbox)`
    width: 16px;
    height: 16px;
  `,
};

export { SettingSideBar };
