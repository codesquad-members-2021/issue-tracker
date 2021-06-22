import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { IssueRefMenuProps, UsefulObjectType } from "utils/interface";
import { MenuItem } from "@material-ui/core";

interface IssueRefMenuPresenterProps extends IssueRefMenuProps {
  handleChange: (event: React.ChangeEvent<{}>) => void;
  refState: UsefulObjectType;
}

function IssueRefMenuPresenter(props: IssueRefMenuPresenterProps) {
  const { buttonTitle, listItems, handleChange, refState } = props;
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.whiteColor}>{buttonTitle}</InputLabel>
        <Select
          value={refState[buttonTitle]}
          onChange={handleChange}
          label={buttonTitle}
          name={buttonTitle}
          classes={{ root: classes.whiteColor, icon: classes.whiteColor }}
        >
          <MenuItem value="all">전체</MenuItem>
          {listItems.map((item) => (
            <MenuItem value={item.id}>{item.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default IssueRefMenuPresenter;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    whiteColor: {
      color: "white",
    },
  })
);
