import styled from "styled-components";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";
import { ReactComponent as LabelTag } from "@/assets/svg/labelTag.svg";
import { ReactComponent as MilestoneTag } from "@/assets/svg/milestoneTag.svg";
import { ReactComponent as Edit } from "@/assets/svg/Edit.svg";
import { ReactComponent as Trash } from "@/assets/svg/Trash.svg";
import { ReactComponent as Refresh } from "@/assets/svg/Refresh.svg";

const TabComponents = {
  TabContainer: styled(BOX.FLEX_COLUMN_BOX)`
    width: 100%;
    height: fit-content;
    padding: 0 80px;
  `,

  TabHeaderDiv: styled(BOX.FLEX_ROW_BOX)`
    justify-content: space-between;
    width: 100%;
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

  WriteIssueBtn: styled(Button)<{
    backgroundcolor?: string;
    fontcolor?: string;
  }>`
    width: 120px;
    height: 40px;
    ${({ backgroundcolor, fontcolor }) => `
    background: ${backgroundcolor ? backgroundcolor : theme.COLOR.BLUE}; 
    color: ${fontcolor ? fontcolor : theme.GRAY_SCALE.OFF_WHITE}; 
  `};
    font-weight: bold;
    border-radius: 11px;
    &:hover {
      ${({ backgroundcolor, fontcolor }) => `
    background: ${
      backgroundcolor ? theme.COLOR.DARK_BLUE : theme.GRAY_SCALE.OFF_WHITE
    }; 
    color: ${fontcolor ? theme.GRAY_SCALE.OFF_WHITE : theme.COLOR.BLUE}; 
  `};
    }
  `,
};

const LabelMilestoneTable = {
  IssueTable: styled.div`
    border: 1px solid ${theme.GRAY_SCALE.LINE};
    background: white;
    width: 100%;
    border-radius: 16px;
    margin-top: 2rem;
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

  TableHeaderTabDiv: styled(BOX.FLEX_CENTER_BOX)`
    gap: 30.67px;
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

  TableRowContentLeft: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
  `,

  LabelWrapper: styled.div`
    width: 128px;
  `,

  DescriptionWrapper: styled.div`
    color: ${theme.GRAY_SCALE.LABEL};
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
  `,

  TableRowButtonDiv: styled(BOX.FLEX_ROW_BOX)`
    gap: 1rem;
    font-weight: bold;
  `,

  TableButtonDiv: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  `,
};

const AddNewModal = {
  AddModalDiv: styled.div`
    width: 100%;
    height: 345px;
    background: ${theme.GRAY_SCALE.OFF_WHITE};
    padding: 32px;
    margin-top: 24px;
    border-radius: 16px;
  `,

  AddModalTitle: styled.div`
    font-size: ${theme.FONT_SIZE.TEXT_LARGE};
  `,

  ModalContent: styled(BOX.FLEX_ROW_BOX)`
    margin-top: 24px;
    justify-content: space-between;
    width: 100%;
  `,

  ModalLeft: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
    justify-content: center;
    width: 312px;
    height: 217px;
  `,

  ModalRight: styled(BOX.FLEX_COLUMN_BOX)`
    width: 904px;
    gap: 16px;
  `,

  InputWrapper: styled(BOX.FLEX_COLUMN_BOX)`
    width: 100%;
    gap: 16px;
    margin-right: 32px;
  `,
  Input: styled.input`
    width: 100%;
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    border-radius: 14px;
    padding: 18px 24px;
    background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    border: none;
    outline: none;
    height: 40px;
    margin-bottom: 16px;
    resize: none;
    ::placeholder {
      font-size: ${theme.FONT_SIZE.TEXT_SMALL};
      color: ${theme.GRAY_SCALE.PLACEHOLDER};
    }
  `,

  ChangeColorContainer: styled(BOX.FLEX_ROW_BOX)`
    gap: 16px;
  `,

  ChangeBackgroundDiv: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
    padding: 0 14px 0 24px;
    background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    width: 240px;
    height: 40px;
    border-radius: 14px;
  `,
  ChangeFontColorDiv: styled(BOX.FLEX_ROW_BOX)`
    padding: 0 24px;
    align-items: center;
    background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    width: 352px;
    height: 40px;
    border-radius: 14px;
  `,

  FinishWriteBtnDiv: styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,

  FinishWriteBtn: styled(Button)`
    width: 120px;
    height: 40px;
    background: ${theme.COLOR.BLUE};
    color: ${theme.GRAY_SCALE.OFF_WHITE};
    font-weight: bold;
    border-radius: 11px;
    &:hover {
      background: ${theme.COLOR.DARK_BLUE};
    }
  `,
  ColorTitle: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
    width: 80px;
    height: 40px;
    color: ${theme.GRAY_SCALE.LABEL};
    font-size: ${theme.FONT_SIZE.TEXT_X_SMALL};
  `,
  ColorContent: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    width: 103px;
    height: 40px;
  `,
};

const TabAssets = {
  LabelTag: styled(LabelTag)`
    margin-right: 8px;
  `,
  MilestoneTag: styled(MilestoneTag)`
    margin-right: 8px;
  `,
  TrashIcon: styled(Trash)``,
  EditIcon: styled(Edit)``,
  RefreshIcon: styled(Refresh)``,
};

export { TabComponents, AddNewModal, TabAssets, LabelMilestoneTable };
