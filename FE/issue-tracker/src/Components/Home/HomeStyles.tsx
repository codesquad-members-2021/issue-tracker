import styled from "styled-components";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";
import { ReactComponent as LabelTag } from "@/assets/labelTag.svg";
import { ReactComponent as MilestoneTag } from "@/assets/milestoneTag.svg";

const Home = {
  HomeContent: styled(BOX.FLEX_COLUMN_BOX)`
    width: 100%;
    height: fit-content;
    padding: 0 80px;
    border: 1px solid red;
  `,
  ContentNavDiv: styled(BOX.FLEX_ROW_BOX)`
    justify-content: space-between;
  `,

  ContentNavLeft: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
    background: none;
    height: 40px;
    border: 1px solid gray;
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
    background: ${theme.COLOR.BLUE};
    border-radius: 11px;
    &:hover {
      background: ${theme.COLOR.DARK_BLUE};
    }
  `,
};

const FilterSearchBar = {};

const HomeAssets = {
  labelTag: styled(LabelTag)`
    margin-right: 8px;
  `,
  milestoneTag: styled(MilestoneTag)`
    margin-right: 8px;
  `,
};

export { Home, HomeAssets, FilterSearchBar };
