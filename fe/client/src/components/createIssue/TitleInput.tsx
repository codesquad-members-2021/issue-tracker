import React, { useCallback } from 'react'
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputField from '@/components/common/InputField';
import { issueCommentInputAtom, issueTitleInputAtom } from '@components/common/atoms/issueInputAtom';
import { inputStyles } from '@components/common/baseStyle/baseStyle';
import API from '@/utils/API';
import useDebounceTyping from '@/utils/hook/useDebounce';
import ClipIcon from '@/Icons/Clip.svg';
import useRecoilInput from '@/utils/hook/useRecoilInput';

const TitleInput = () => {
  const classes = inputStyles();
  const [debouncedCount, setDebounceCount] = useDebounceTyping<number>(0, { start: 500, end: 2000 });
  const titleInputState = useRecoilInput(issueTitleInputAtom);
  const { value: commentInputValue, onChange: commentOnChange } = useRecoilInput(issueCommentInputAtom);

  const handleChangeTyping = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDebounceCount(event.target.value.length);
    commentOnChange(event)
  }, []);

  const handleChangeFile = async (event: React.ChangeEvent<any>) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("fileName", event.target.files[0].name);
    try {
      const data = await API.post.files(formData);
      const fileAddData = `\n[${data.name}](${data.path})`;
      commentOnChange(event, fileAddData);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <InputWrapper>
      <InputField {...titleInputState} />
      <TextAreaWrapper>
        <TextField
          label="코멘트를 입력하세요"
          multiline
          rows={15}
          className={classes.desc}
          variant="filled"
          onChange={handleChangeTyping}
          value={commentInputValue}
          InputProps={{
            disableUnderline: true
          }}
        />
        <InputWordCountWrapper>
          {debouncedCount
            ? <TypingCountWrapper>띄어쓰기 포함 {debouncedCount}자</TypingCountWrapper>
            : ''}
        </InputWordCountWrapper>
      </TextAreaWrapper>
      <input
        accept="image/*"
        className={classes.displayNone}
        id="raised-button-file"
        multiple
        onChange={handleChangeFile}
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button component="span" className={classes.fileButton}>
          <ClipImageTag src={ClipIcon} alt="" />
          파일 첨부하기
        </Button>
      </label>
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  width:100%;
`;

const ClipImageTag = styled.img`
  margin-right:10px;
`;

const TextAreaWrapper = styled.div`
  position:relative;
`;

const InputWordCountWrapper = styled.div`
  position: absolute;
  right:20px;
  bottom:10px;
  z-index:1;
`;

const TypingCountWrapper = styled.div`
  font-size: 12px;
  color:#6E7191;
`;
export default TitleInput;
