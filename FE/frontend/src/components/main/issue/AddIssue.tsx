import React from 'react';
import styled from 'styled-components';

const AddIssue = () => {
  return (
    <>
      <TopWrapper>
        <Title>새로운 이슈 작성</Title>
        <Line />
      </TopWrapper>
      <BottomWrapper>
        <User />
        <InputWrapper>
          <TitleInput></TitleInput>
          <CommentInput></CommentInput>
        </InputWrapper>
        <Assignees></Assignees>
      </BottomWrapper>
    </>
  );
};

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

const BottomWrapper = styled.div`
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
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  width: 880px;
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
  background: ${props => props.theme.greyscale.inputBackground};
  border-radius: 14px;
`;

const CommentInput = styled.input`
  width: 880px;
  height: 343px;
  padding: 0px 24px;

  background: ${props => props.theme.greyscale.inputBackground};
  border-radius: 16px;
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

export default AddIssue;
