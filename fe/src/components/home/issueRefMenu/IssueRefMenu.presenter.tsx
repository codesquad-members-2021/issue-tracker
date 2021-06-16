import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { IssueRefMenuProps, UsefulObjectType } from "utils/interface";

interface IssueRefMenuPresenterProps extends IssueRefMenuProps {
  handleChange: (event: React.ChangeEvent<{}>) => void;
  selectState: UsefulObjectType;
}

export default function IssueRefMenuPresenter(props: IssueRefMenuPresenterProps) {
  const { buttonTitle, listItems, handleChange, selectState } = props;
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.select}>{buttonTitle}</InputLabel>
        <Select
          native
          value={selectState[buttonTitle]}
          onChange={handleChange}
          label={buttonTitle}
          inputProps={{
            name: `${buttonTitle}`,
            id: `outlined-${buttonTitle}-native-simple`,
          }}
        >
          <option aria-label="None" value="" />
          {listItems.map((item) => (
            <option value={item.title}>{item.title}</option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select: {
      color: "white",
    },
  })
);
