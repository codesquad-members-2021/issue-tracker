const loginBtnStyle = {
  color: 'gr_offWhite',
  width: '340px',
  height: '64px',
  size: 'lg',
  borderRadius: '20px',
  margin: '24px',
};

const gitLoginStyle = {
  ...loginBtnStyle,
  background: 'gr_titleActive',
  colorScheme: 'blackAlpha',
};

const activeLoginStyle = {
  ...loginBtnStyle,
  background: 'bl_initial',
  colorScheme: 'blue',
};

const inactiveLoginStyle = {
  ...activeLoginStyle,
  opacity: '.4',
};

const inputStyle = {
  width: '340px',
  variant: 'filled',
};

export { gitLoginStyle, activeLoginStyle, inactiveLoginStyle, inputStyle };
