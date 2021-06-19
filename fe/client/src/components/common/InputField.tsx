import React from 'react'
import TextField from '@material-ui/core/TextField';
import { inputStyles } from './baseStyle/baseStyle';

type InputFieldType = {
  defaultValue?: string;
  label?: string;
  width?: string;
  [x: string]: any;
}

const InputField = ({ defaultValue, label, width, endAdornment, ...props }: InputFieldType) => {
  const classes = inputStyles();
  return (
    <TextField
      label={label ? label : '제목'}
      variant="filled"
      className={classes.title}
      style={{ marginBottom: '16px', width }}
      defaultValue={defaultValue}
      {...props}
      InputProps={{
        disableUnderline: true,
        endAdornment: endAdornment
      }}
    />
  )
}

export default InputField;
