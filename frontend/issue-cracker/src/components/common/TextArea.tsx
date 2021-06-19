import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styled from 'styled-components';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const TextArea = (): JSX.Element => {
  return (
    <TextAreaStyle>
      <DashedLine />
      <TextAreaUI />
      <AddFileBox>
        <AttachFileBox>
          <div>
            <CustomAttachFileIcon />
          </div>
          <div>파일 첨부하기</div>
        </AttachFileBox>
      </AddFileBox>
    </TextAreaStyle>
  );
};

export default TextArea;

const TextAreaUI = (): JSX.Element => {
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
        minHeight: '343px',
        width: '100%',
        resize: 'vertical',
      }}
    />
  );
};

const TextAreaStyle = styled.div`
  position: relative;
  width: 100%;
  padding: 16px 24px;
  background: #eff0f6;
  border-radius: 16px;
  border: 1px solid #eff0f6;
  :focus-within {
    border: 1px solid #222;
    background: #fff;
  }
`;

// const TextAreaBox = styled.textarea`
//   background: inherit;
//   min-width: 340px;
//   min-height: 100px;
//   max-height: 200px;
//   outline: none;
//   border: none;
//   font-size: 16px;
//   line-height: 28px;
//   border-top-left-radius: 16px;
//   border-top-right-radius: 16px;
//   font-family: inherit;
//   ::placeholder {
//     color: #a0a3bd;
//   }
// `;

const DashedLine = styled.div`
  position: absolute;
  bottom: 52px;
  left: 0;
  border-bottom: 1px dashed #d9dbe9;
  width: 100%;
`;

const AddFileBox = styled.div`
  padding-top: 12px;
  height: 40px;
  color: #6e7191;
  font-size: 12px;
  line-height: 20px;
`;

const CustomAttachFileIcon = styled(AttachFileIcon)`
  transform: rotate(45deg);
  margin-right: 8px;
  font-size: 16px;
`;

const AttachFileBox = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 0px;
`;
