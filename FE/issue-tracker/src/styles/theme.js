import theme from '@chakra-ui/theme';

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
};

export default customTheme;
