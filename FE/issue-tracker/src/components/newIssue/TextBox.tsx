import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';

import { ReactComponent as FileIcon } from '@assets/file.svg';
import { contentsInputStyle, titleInputStyle } from './style';
import {
  isInputtedTitleAtom,
  isClickedCompleteBtnAtom,
  newIssueContentsAtom,
} from '@store/atoms/newIssue';
import React from 'react';

function TextBox() {
  const [isInputtedTitle, setIsInputtedTitle] =
    useRecoilState(isInputtedTitleAtom);
  const isClickedCompleteBtn = useRecoilValue(isClickedCompleteBtnAtom);
  const setNewIssueContents = useSetRecoilState(newIssueContentsAtom);
  const [numOfChars, setNumOfChars] = useState(0);

  const titleInput = useRef<HTMLInputElement>(null);
  const contentsInput = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (
      isClickedCompleteBtn &&
      titleInput.current != null &&
      contentsInput.current != null
    )
      setNewIssueContents({
        title: titleInput.current.value,
        description: contentsInput.current.value,
      });
  }, [isClickedCompleteBtn]);

  const handleChangeTitle = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (!isInputtedTitle && target.value.length > 0) setIsInputtedTitle(true);
    else if (isInputtedTitle && target.value.length === 0)
      setIsInputtedTitle(false);
  };

  const handleChangeTextArea = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const length = target.value.length;
    if (numOfChars === length) return;
    setNumOfChars(length);
  };

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
      <Input
        {...titleInputStyle}
        ref={titleInput}
        onChange={handleChangeTitle}
      />
      <Description>
        <Textarea
          {...contentsInputStyle}
          ref={contentsInput}
          onChange={handleChangeTextArea}
        />
        <Span>띄어쓰기 포함 {numOfChars} 자</Span>
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

const Span = styled.div`
  right: 30px;
  bottom: 72px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.label};
  position: absolute;
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
