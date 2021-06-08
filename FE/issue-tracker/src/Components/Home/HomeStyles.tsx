import styled from "styled-components";
import ButtonGroup from "@material-ui/core/ButtonGroup";
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
  `,
  ContentNavRight: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
  `,
  ButtonGroup: styled(ButtonGroup)`
    border: 1px solid blue;
  `,
};

const HomeAssets = {
  labelTag: styled(LabelTag)``,
  milestoneTag: styled(MilestoneTag)``,
};

export { Home, HomeAssets };
