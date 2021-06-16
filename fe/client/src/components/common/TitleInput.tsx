import React from 'react'
import TextField from '@material-ui/core/TextField';
import { inputStyles } from './baseStyle/baseStyle';

const TitleInput = () => {
  const classes = inputStyles();
  return (
    <TextField
      label="제목"
      variant="filled"
      className={classes.title}
      style={{ marginBottom: '16px' }}
      InputProps={{
        disableUnderline: true,
      }}
    />
  )
}

export default TitleInput;
