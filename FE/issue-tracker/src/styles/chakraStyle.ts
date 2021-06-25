const menuBtnStyle = {
  padding: '5px 0',
  marginBottom: '6px',
  display: 'flex',
  width: '100%',
  height: '100%',
  variant: 'unstyled',
  justifyContent: 'space-between',
  borderRadius: '16px',
};

const menuItemStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  background: 'none',
  _hover: {
    bg: 'none',
  },
  _focus: {
    bg: 'none',
  },
};

const checkBoxStyle = {
  width: '100%',
  height: '100%',
  colorScheme: 'cyan',
  borderColor: 'gr_label',
};

const filterBarMenuBtn = {
  background: 'gr_background',
  width: '128px',
  borderRadius: '11px 0px 0px 11px',
  border: '1px solid gr_inputBackground',
};

export { checkBoxStyle, menuItemStyle, menuBtnStyle, filterBarMenuBtn };
