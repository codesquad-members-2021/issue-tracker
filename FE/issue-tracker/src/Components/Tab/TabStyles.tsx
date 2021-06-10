import styled from "styled-components";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";
import { ReactComponent as LabelTag } from "@/assets/svg/labelTag.svg";
import { ReactComponent as MilestoneTag } from "@/assets/svg/milestoneTag.svg";

const TabComponents = {
  TabHeaderDiv: styled(BOX.FLEX_ROW_BOX)`
    justify-content: space-between;
    width: 100%;
    padding: 27px 80px;
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

const TabAssets = {
  LabelTag: styled(LabelTag)`
    margin-right: 8px;
  `,
  MilestoneTag: styled(MilestoneTag)`
    margin-right: 8px;
  `,
};

export { TabComponents, TabAssets };
