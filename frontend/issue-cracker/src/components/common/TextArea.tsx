import React from 'react';
import styled from 'styled-components';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import TextAreaTest from '../common/TextAreaTest';

const TextArea = (): JSX.Element => {
  return (
    <TextAreaStyle>
      <DashedLine />
      {/* <TextAreaBox placeholder={'코멘트를 입력하세요'} /> */}
      <TextAreaTest />
      <AddFileBox>
        <AttachFileBox>
          <div>
            <CustomAttachFileIcon fontSize="small" />
          </div>
          <div>파일 첨부하기</div>
        </AttachFileBox>
      </AddFileBox>
    </TextAreaStyle>
  );
};

export default TextArea;

const TextAreaStyle = styled.div`
  position: relative;
  width: fit-content;
  padding: 16px 24px;
  background: #eff0f6;
  border-radius: 16px;
  border: 1px solid #eff0f6;

  :focus-within {
    border: 1px solid #222;
    background: #fff;
  }
`;

const TextAreaBox = styled.textarea`
  background: inherit;
  min-width: 340px;
  min-height: 100px;
  max-height: 200px;
  outline: none;
  border: none;
  font-size: 16px;
  line-height: 28px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  font-family: inherit;

  ::placeholder {
    color: #a0a3bd;
  }
`;

const DashedLine = styled.div`
  position: absolute;
  bottom: 52px;
  left: 0;
  border: 1px dashed #d9dbe9;
  width: 100%;
`;

const AddFileBox = styled.div`
  padding-top: 10px;
  height: 40px;
  color: #6e7191;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
`;

const CustomAttachFileIcon = styled(AttachFileIcon)`
  transform: rotate(45deg);
  margin-right: 8px;
`;

const AttachFileBox = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 0px;
`;
