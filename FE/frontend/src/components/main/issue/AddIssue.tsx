import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Paperclip } from '../../../icons/paperclip.svg';
import Typos from '../../../styles/atoms/Typos';

const AddIssue = () => {
  return (
    <AddIssueWrapper>
      <TopWrapper>
        <Title>새로운 이슈 작성</Title>
        <Line />
      </TopWrapper>
      <MainWrapper>
        <User />
        <InputWrapper>
          <TitleInput placeholder="제목"></TitleInput>
          <CommentInput placeholder="코멘트를 입력하세요"></CommentInput>
          <FileSection>
            <input type="file" id="BtnBrowseHidden" hidden />
            <LabelWrapper htmlFor="BtnBrowseHidden">
              <Paperclip />
              <Typos sm>파일을 추가하세요</Typos>
            </LabelWrapper>
          </FileSection>
        </InputWrapper>
        <Assignees></Assignees>
      </MainWrapper>
      <BottomWrapper>
        <Line />
      </BottomWrapper>
    </AddIssueWrapper>
  );
};

const AddIssueWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  padding: 24px 48px;
`;

const Title = styled.div`
  font-size: 32px;
  line-height: 48px;
  color: ${props => props.theme.greyscale.titleActive};
`;

const Line = styled.div`
  height: 1px;
  margin-top: 32px;
  background: ${props => props.theme.greyscale.line};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 220px;

  & > div {
    margin: 0 12px;
  }
`;

const User = styled.div`
  min-width: 44px;
  height: 44px;
  border-radius: 22px;
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  width: 880px;
  font-size: 16px;
`;

const TitleInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 24px;
  margin-bottom: 16px;
  width: 880px;
  height: 56px;
  font-size: 16px;
  background: ${props => props.theme.greyscale.inputBackground};
  border-radius: 14px;
`;

const CommentInput = styled.textarea`
  display: flex;
  align-items: flex-start;
  width: 880px;
  height: 291px;
  padding: 24px 24px;
  font-size: 16px;
  background: ${props => props.theme.greyscale.inputBackground};
  border-radius: 16px 16px 0 0;
  resize: none;
`;

const FileSection = styled.div`
  display: flex;
  align-items: center;
  width: 880px;
  height: 52px;
  border-radius: 0 0 16px 16px;
  padding: 10px;
  background: ${props => props.theme.greyscale.inputBackground};
  div {
    padding-left: 5px;
  }
`;

const LabelWrapper = styled.label`
  display: flex;
`;

const Assignees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  width: 308px;
  background: ${props => props.theme.greyscale.offWhite};
  border-radius: 16px 16px 0px 0px;
  margin: 1px 0px;
`;

const BottomWrapper = styled.div`
  padding: 24px 48px;
`;

export default AddIssue;
