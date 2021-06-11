import theme from '@chakra-ui/theme';
import { css } from 'styled-components';

const page = css`
  width: 1440px;
  margin: 0 auto;
  padding: 0 80px 80px 80px;
`;

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// LabelCell, MilestoneCell
const cellWrap = css`
  width: 100%;
  height: 100px;
  padding: 20px 32px;
  background-color: ${({ theme }) => theme.colors.gr_offWhite};
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-top: none;
  border-radius: ${({ last }) => (last ? '0 0 16px 16px' : 'none')};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const tableHeader = css`
  margin-top: 24px;
  padding: 18px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  background: ${({ theme }) => theme.colors.gr_background};
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-radius: 16px 16px 0px 0px;

  color: ${({ theme }) => theme.colors.gr_label};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const newLabelMilestoneWrap = css`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  padding: 32px;
  border-radius: ${({ theme }) => theme.radii['2xl']};
  background-color: ${({ theme }) => theme.colors.gr_offWhite};
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-bottom: 16px;
  }
`;

const issueTag = css`
  ${({ theme }) => theme.flexCenter};
  width: 100px;
  height: 40px;
  margin-right: 8px;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  .icon {
    margin-right: 5px;
  }
`;

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    gr_titleActive: '#14142B',
    gr_body: '#4E4B66',
    gr_label: '#6E7191',
    gr_placeholder: '#A0A3BD',
    gr_line: '#D9DBE9',
    gr_inputBackground: '#EFF0F6',
    gr_background: '#F7F7FC',
    gr_offWhite: '#FEFEFE',
    bl_initial: '#007AFF',
    bl_hover: '#004DE3',
    bl_focus: '#007AFF',
    bl_disabled: '#007AFF',
    bl_light: '#C7EBFF',
    pu_primary: '#0025E7',
    pu_dark: '#020070',
    pu_light: '#CCD4FF',
    success_primary: '#34C759',
    success_dark: '#00A028',
    success_light: '#DDFFE6',
    error_primary: '#FF3B30',
    error_dark: '#C60B00',
    error_light: '#FFD1CF',
  },
  page,
  flexCenter,
  cellWrap,
  tableHeader,
  newLabelMilestoneWrap,
  issueTag,
};

export default customTheme;
