import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useRecoilValue } from 'recoil';
import { loginState } from 'store/loginStore';
import ProfileImg from 'components/atom/ProfileImg';
const useStyle = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
    fontFamily: "'Raleway', sans-serif",
    fontSize: '30px',
  },
  modalStyles: {
    backgroundColor: 'red',
  },
}));

function Header() {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const loginData = useRecoilValue(loginState);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toolbarStyle = {
    padding: '0 80px',
  };
  return (
    <HeaderBlock>
      <AppBar position='static' color='transparent'>
        <Toolbar style={toolbarStyle}>
          <Typography className={classes.typographyStyles}>Issue Tracker</Typography>
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              {loginData ? (
                <ProfileImg avatarURL={loginData?.avatarUrl} className='login__profile-img' />
              ) : (
                <AccountCircleIcon />
              )}
            </IconButton>
            <Menu id='menu-appbar' anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>{loginData?.userName}</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </HeaderBlock>
  );
}

export default Header;

const HeaderBlock = styled.div`
  .login__profile-img {
    width: 30px;
    height: 30px;
  }
`;
