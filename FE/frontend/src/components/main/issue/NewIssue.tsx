import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import useMutate from '../../../util/useMutate';
import Typos from '../../../styles/atoms/Typos';
import User from '../../../styles/atoms/User';
import Buttons from '../../../styles/atoms/Buttons';
import { ReactComponent as Paperclip } from '../../../icons/paperclip.svg';
import { ReactComponent as XSquare } from '../../../icons/xSquare.svg';

const AddIssue = () => {
  const userData = localStorage.getItem('userData');
  const parsedUserData = userData && JSON.parse(userData);

  const [inputCount, setInputCount] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [initial, setInitial] = useState(false);
  const [input, setInput] = useState({
    assignee_ids: [],
    comment: '',
    file: '',
    label_ids: [],
    milestone_id: 0,
    title: '',
  });

  let debounceTimeoutId: ReturnType<typeof setTimeout>;
  let history = useHistory();

  const { mutateAsync } = useMutation(useMutate('issue', 'add'), {
    onSuccess: () => {
      history.push('/main');
    },
  });

  const countInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const valueCount = e.target.value.length;
    setInputCount(valueCount);
  };

  const setButtonStatus = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const valueCount = e.target.value.length;

    if (valueCount) {
      setDisabled(false);
      setInitial(true);
    } else {
      setDisabled(true);
      setInitial(false);
    }
  };

  const debounce = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    callback: any,
    milliseconds: number = 500
  ) => {
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = setTimeout(() => {
      callback();
    }, milliseconds);
  };

  const registerNewIssue = () => {
    mutateAsync({ data: input });
  };

  return (
    <AddIssueContainer>
      <TopContainer>
        <Title>새로운 이슈 작성</Title>
      </TopContainer>
      <Line />
      <MainContainer>
        <User imageURL={parsedUserData?.profile_image} />
        <InputContainer>
          <TitleInput
            placeholder="제목"
            onChange={e => {
              setInput({ ...input, title: e.target.value });
              debounce(e, () => {
                setButtonStatus(e);
              });
            }}></TitleInput>
          <CommentInput
            value={input.comment}
            onChange={e => {
              setInput({ ...input, comment: e.target.value });
              debounce(e, () => {
                setButtonStatus(e);
                countInput(e);
              });
            }}
            placeholder="코멘트를 입력하세요"></CommentInput>
          <Count xs>띄어쓰기 포함 {inputCount}자</Count>
          <FileSection>
            <input
              type="file"
              id="BtnBrowseHidden"
              hidden
              onChange={e => {
                let files = e.target.files;
                // files && input.file.append('key1', files[0]);

                files &&
                  setInput({
                    ...input,
                    comment: `${input.comment}\n![${files[0].name}]`,
                  });
              }}
              //서버 업로드 및 pile-pathname 추가 필요
            />
            <LabelContainer htmlFor="BtnBrowseHidden">
              <Paperclip />
              <Typos sm>파일을 추가하세요</Typos>
            </LabelContainer>
          </FileSection>
        </InputContainer>
        <Assignees></Assignees>
      </MainContainer>
      <Line />
      <BottomContainer>
        <CancelButtonContainer to={`/main`}>
          <Typos sm>
            <XSquare />
            작성 취소
          </Typos>
        </CancelButtonContainer>
        <Buttons
          disabled={disabled}
          initial={initial}
          medium
          onClick={registerNewIssue}>
          완료
        </Buttons>
      </BottomContainer>
    </AddIssueContainer>
  );
};

const AddIssueContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  padding: 0px 48px;
`;

const Title = styled.div`
  font-size: 32px;
  line-height: 48px;
  color: ${props => props.theme.greyscale.titleActive};
`;

const Line = styled.div`
  height: 1px;
  margin-top: 32px;
  margin: 24px 48px;
  background: ${props => props.theme.greyscale.line};
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & > div {
    margin: 0 12px;
  }
`;

const InputContainer = styled.form`
  position: relative;
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

const Count = styled(Typos)`
  position: absolute;
  right: 20px;
  bottom: 60px;
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

const LabelContainer = styled.label`
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

const BottomContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 60px;
  border: none;
  background: none;

  svg {
    stroke: ${props => props.theme.greyscale.label};
  }
`;

const CancelButtonContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
  & > div {
    padding: 0 24px;
  }
`;

export default AddIssue;
