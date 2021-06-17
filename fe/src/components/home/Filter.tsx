import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { filterOptionType } from "utils/interface";

interface filterProps {
  options: filterOptionType[];
}

function Filter({ options }: filterProps) {
  const handleChange = (event: React.ChangeEvent<any>) => {
    console.log(event.target.innerText);
  };

  return (
    <Autocomplete
      onChange={handleChange}
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => option.title}
      style={{ width: 600 }}
      renderInput={(params) => <TextField {...params} label="필터" variant="outlined" />}
    />
  );
}

export default Filter;
