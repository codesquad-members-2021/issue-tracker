import styled from 'styled-components';
import { useEffect, useState } from 'react'
import ResponsiveLayout from '../components/common/ResponsiveLayout';

const AddIssuePage = () => {
  const [lastPressedKey, setLastPressedKey] = useState<any>();
  const [accumulateLetters, setAccumulateLetters] = useState<any>([]);
  const [textBlock, setTextBlock] = useState<any>({});


  useEffect(() => {
    console.log("textBlock", textBlock);
  })

  const inspectLastPressedKey = (curKey) => {
    if (curKey === " " && lastPressedKey === "-") {
      console.log("잘눌림");
    }
  }

  const createNewTextBlock = () => {
    const textObj = {
      tag: '',
      contents: ''
    }
    textObj.contents = accumulateLetters.join('');
    if (textObj.contents[1] === "Shift" && textObj.contents[0] === '#') {
      textObj.tag = `<h1>${textObj.contents}</h1>`;
    }
    setTextBlock(textObj);
  }

  const onKeyDownEvent = (e) => {
    console.log("event", e.key, e.key === "Shift");
    const pressedKey = e.key;

    if (pressedKey !== "Shift" && pressedKey !== "Meta" && pressedKey !== "Enter" && pressedKey !== "Backspace") {
      setAccumulateLetters([...accumulateLetters, pressedKey]);
      if(lastPressedKey) {
        inspectLastPressedKey(pressedKey);
        //unordered list를 반환해줘야 함.
      }
      setLastPressedKey(pressedKey);
    }

    if (pressedKey === "Enter") {
      createNewTextBlock();
    }

    if (pressedKey === "Backspace") {

    }
  }

  return (
    <AddIssueLayout>
      <InputLayer>
        <AddIssueTitle>새로운 이슈 작성</AddIssueTitle>
        <TitleInput type={"text"} placeholder={"제목"}></TitleInput>
        <CommentLayer>
          <CommentInput
            type={"text"}
            placeholder={"코멘트를 입력하세요"}
            onKeyDown={(e) => onKeyDownEvent(e)}
          />
          <CommentOutput>
            {textBlock.contents}
          </CommentOutput>
        </CommentLayer>
      </InputLayer>
    </AddIssueLayout>
  )
}

const AddIssueLayout = styled.div`
  width: 100%;
`
const AddIssueTitle = styled.div`
  font-size: var(--TitleFontSize);
`
const InputLayer = styled(ResponsiveLayout)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 80px;
`
const TitleInput = styled.input`

  width: 88rem;
  height: 5.6rem;
  margin-bottom: 1.6rem;
  border-radius: 1.4rem;
  background-color: #EFF0F6;
  border: none;
  padding: 0 2.4rem;
`

const CommentLayer = styled.div`
  display: flex;
`

const CommentInput = styled.input`
  width: 50%;
  height: 34.3rem;
  border-radius: 1.4rem;
  background-color: #EFF0F6;
  border: none;
  padding: 0 2.4rem;
`

const CommentOutput = styled.div`
  width: 50%;
  height: 34.3rem;
  border-radius: 1.4rem;
  background-color: #EFF0F6;
  border: none;
  padding: 0 2.4rem;
  margin-left: 2rem;
`

export default AddIssuePage;
