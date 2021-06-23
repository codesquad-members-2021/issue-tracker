import React from 'react';
import styled from 'styled-components';

import { ReactComponent as FileIcon } from '@assets/file.svg';
import TitleInput from './TitleInput';
import ContentsTextArea from './ContentsTextArea';

function TextBox() {
  // 아직 서버 구현이 안 돼있어 추후에 구현 예정
  const handleChangeFile = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const fileList = target.files;
    if (fileList == null) return;
    const formData = new FormData();
    formData.append('file', fileList[0]);
  };

  return (
    <TextBoxWrap>
      <TitleInput />
      <Description>
        <ContentsTextArea />
        <ImageUploadWrap>
          <label htmlFor="input_file">
            <FileIcon />
            <span>파일 첨부하기</span>
          </label>
          <input
            type="file"
            accept="image/*"
            id="input_file"
            onChange={handleChangeFile}
          />
        </ImageUploadWrap>
      </Description>
    </TextBoxWrap>
  );
}

export default TextBox;

const TextBoxWrap = styled.div`
  margin: 0 32px 0 16px;
  width: 880px;
`;

const Description = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.gr_inputBackground};
  border-radius: ${({ theme }) => theme.radii['2xl']};
`;

const ImageUploadWrap = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  color: ${({ theme }) => theme.colors.label};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-top: 1px dotted ${({ theme }) => theme.colors.gr_line};

  label {
    padding: 16px 24px;
    cursor: pointer;
    display: flex;
    align-items: center;

    span {
      padding-left: 10px;
    }
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }
`;
