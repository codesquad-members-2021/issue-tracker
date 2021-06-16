import React from 'react'
import TextField from '@material-ui/core/TextField';
import { inputStyles } from './baseStyle/baseStyle';

type TitleInputType = {
  defaultValue?: string;
  label?: string;
  width?: string;
  [x: string]: any;
}

const TitleInput = ({ defaultValue, label, width, ...props }: TitleInputType) => {
  const classes = inputStyles();
  return (
    <TextField
      label={label ? label : '제목'}
      variant="filled"
      className={classes.title}
      style={{ marginBottom: '16px', width }}
      defaultValue={defaultValue}
    
      InputProps={{
        disableUnderline: true,
        ...props
      }}
    />
  )
}

export default TitleInput;
