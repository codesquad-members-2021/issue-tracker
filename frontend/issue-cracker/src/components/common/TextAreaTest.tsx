import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const TextAreaTest = (): JSX.Element => {
  return (
    <TextareaAutosize
      aria-label="empty textarea"
      placeholder="코멘트를 입력하세요"
      style={{
        background: 'inherit',
        outline: 'none',
        border: 'none',
        borderRadius: '16px',
        padding: '16px 0px',
        minHeight: '150px',
        maxHeight: '300px',
        minWidth: '300px',
        height: '150px',
      }}
    />
  );
};

export default TextAreaTest;
