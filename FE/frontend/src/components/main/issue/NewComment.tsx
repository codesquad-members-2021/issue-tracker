import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import useMutate from '../../../util/useMutate';
import Typos from '../../../styles/atoms/Typos';
import User from '../../../styles/atoms/User';
import Buttons from '../../../styles/atoms/Buttons';
import { ReactComponent as Paperclip } from '../../../icons/paperclip.svg';
import { ReactComponent as XSquare } from '../../../icons/xSquare.svg';

interface Props {
  issueId: number;
  refetch(): void;
}

const NewComment = (props: Props) => {
  const userData = localStorage.getItem('userData');
  const parsedUserData = userData && JSON.parse(userData ? userData : '');

  const [inputCount, setInputCount] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [initial, setInitial] = useState(false);
  const [input, setInput] = useState({
    user_id: parsedUserData.id,
    content: '',
    file: '',
  });

  let debounceTimeoutId: ReturnType<typeof setTimeout>;

  const { mutateAsync } = useMutation(useMutate('comment', 'add'), {
    onSuccess: () => {
      setInput({ ...input, content: '' });
      props.refetch();
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
    mutateAsync({ data: input, id: props.issueId });
  };

  return (
    <AddIssueContainer>
      <MainContainer>
        <User imageURL={parsedUserData?.profile_image} />
        <InputContainer>
          <CommentInput
            value={input.content}
            onChange={e => {
              setInput({ ...input, content: e.target.value });
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
                    content: `${input.content}\n![${files[0].name}]`,
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
      </MainContainer>
      <BottomContainer>
        <Buttons
          disabled={disabled}
          initial={initial}
          small
          onClick={(e: Event) => {
            registerNewIssue();
          }}>
          코멘트 작성
        </Buttons>
      </BottomContainer>
    </AddIssueContainer>
  );
};

const AddIssueContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const BottomContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 0px;
  border: none;
  background: none;

  svg {
    stroke: ${props => props.theme.greyscale.label};
  }
`;

export default NewComment;
