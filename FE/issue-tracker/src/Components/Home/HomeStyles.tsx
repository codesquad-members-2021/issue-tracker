import styled from "styled-components";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";
import { ReactComponent as LabelTag } from "@/assets/svg/labelTag.svg";
import { ReactComponent as MilestoneTag } from "@/assets/svg/milestoneTag.svg";
import { ReactComponent as Down } from "@/assets/svg/Down.svg";
import { ReactComponent as Search } from "@/assets/svg/Search.svg";
import { ReactComponent as IssueMark } from "@/assets/svg/IssueMark.svg";
import { ReactComponent as closeIssueMark } from "@/assets/svg/closeIssueMark.svg";

const Home = {
  HomeContent: styled(BOX.FLEX_COLUMN_BOX)`
    width: 100%;
    height: fit-content;
    padding: 0 80px;
  `,
  ContentNavDiv: styled(BOX.FLEX_ROW_BOX)`
    justify-content: space-between;
    margin: 30px 0;
  `,

  ContentNavLeft: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
    background: none;
    height: 40px;
    border: 1px solid #d9dbe9;
    border-radius: 11px;
  `,
  ContentNavRight: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
  `,
  ButtonGroup: styled(ButtonGroup)`
    border-radius: 11px;
    border: 1px solid ${theme.GRAY_SCALE.LINE};
    margin-right: 16px;
  `,

  Button: styled(Button)`
    border-right: 0.5px solid ${theme.GRAY_SCALE.LINE};
    width: 160px;
    height: 40px;
    font-size: 13px;
    font-weight: bold;
    color: ${theme.GRAY_SCALE.LABEL};
  `,

  WriteIssueBtn: styled(Button)`
    width: 120px;
    height: 40px;
    color: white;
    font-weight: bold;
    background: ${theme.COLOR.BLUE};
    border-radius: 11px;
    &:hover {
      background: ${theme.COLOR.DARK_BLUE};
    }
  `,
};

const FilterSearchBar = {
  FilterDiv: styled(BOX.FLEX_CENTER_BOX)`
    width: 128px;
    height: 40px;
    border-right: 1px solid ${theme.GRAY_SCALE.LINE};
    color: ${theme.GRAY_SCALE.LABEL};
    font-size: ${theme.FONT_SIZE.LINK_SMALL};
    font-weight: bold;
  `,
  SearchDiv: styled(BOX.FLEX_CENTER_BOX)`
    width: 472px;
    height: 40px;
  `,

  SearchInput: styled.input`
    width: 400px;
    height: 28px;
    background: none;
    border: none;
    &::placeholder {
      color: ${theme.GRAY_SCALE.PLACEHOLDER};
      font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    }
  `,
};

const IssueTable = {
  IssueTable: styled.div`
    border: 1px solid ${theme.GRAY_SCALE.LINE};
    background: white;
    width: 100%;
    border-radius: 16px;
  `,

  TableHeader: styled(BOX.FLEX_CENTER_BOX)`
    padding: 0 30px 0 32px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    border-radius: 16px 16px 0 0;
    background: ${theme.GRAY_SCALE.BACKGROUND};
  `,

  TableHeaderLeft: styled.div`
    display: flex;
    gap: 33px;
  `,

  TableHeaderToggleDiv: styled(BOX.FLEX_CENTER_BOX)`
    gap: 30.67px;
  `,

  TableHeaderRight: styled.div`
    display: flex;
    gap: 36px;
  `,

  TableTh: styled(BOX.FLEX_CENTER_BOX)`
    cursor: pointer;
    font-size: ${theme.FONT_SIZE.LINK_SMALL};
    font-weight: bold;
  `,

  TableBody: styled.div`
    width: 100%;
    background: white;
    border-radius: 0 0 16px 16px;
  `,

  TableRow: styled(BOX.FLEX_CENTER_BOX)`
    justify-content: space-between;
    width: 100%;
    height: 100px;
    padding: 0 54px 0 32px;
    background: white;
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    &:last-child {
      border-radius: 0 0 16px 16px;
      border-bottom: none;
    }
  `,

  TableRowLeft: styled(BOX.FLEX_CENTER_BOX)`
    gap: 33px;
  `,

  IssueInfoDiv: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,

  IssueInfoTop: styled.div`
    display: flex;
    gap: 8px;
  `,

  IssueInfoTitle: styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    font-size: ${theme.FONT_SIZE.LINK_MEDIUM};
  `,

  IssueInfoBottom: styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${theme.GRAY_SCALE.LABEL};
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    span {
      display: flex;
      align-items: center;
    }
  `,

  TableRowRight: styled(BOX.FLEX_CENTER_BOX)``,
};

const HomeAssets = {
  LabelTag: styled(LabelTag)`
    margin-right: 8px;
  `,
  MilestoneTag: styled(MilestoneTag)`
    margin-right: 8px;
  `,
  Down: styled(Down)`
    margin-left: 8px;
  `,

  SearchIcon: styled(Search)`
    margin-right: 11.33px;
  `,

  IssueMark: styled(IssueMark)<{ fillColor?: string }>`
    margin-right: 5px;
    fill: ${({ fillColor }) => (fillColor ? fillColor : "none")};
  `,

  CloseIssueMark: styled(closeIssueMark)`
    margin-right: 5px;
  `,
};

export { Home, HomeAssets, FilterSearchBar, IssueTable };
