import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, ListItemText, MenuItem } from "@material-ui/core";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import { IssueRefMenuProps } from "utils/interface";

interface IssueRefMenuPresenterProps extends IssueRefMenuProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
}

export default function IssueRefMenuPresenter(props: IssueRefMenuPresenterProps) {
  const { buttonTitle, listItems, handleClick, handleClose, anchorEl } = props;

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {buttonTitle}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {listItems.map((item) => (
          <StyledMenuItem>
            <ListItemText primary={item.title} />
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
