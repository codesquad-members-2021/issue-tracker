import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react'
import ResponsiveLayout from '../components/common/ResponsiveLayout';

const AddIssuePage = () => {
  const [lastPressedKey, setLastPressedKey] = useState<any>();
  const [accumulateLetters, setAccumulateLetters] = useState<any>([]);
  const [textBlock, setTextBlock] = useState<any>({});
  const $OutputTextBox = useRef<any>()


  useEffect(() => {
    console.log("textBlock", textBlock);
  })

  useEffect(() => {
    $OutputTextBox.current.innerHTML = "";
    accumulateLetters.forEach((block) => {
      $OutputTextBox.current.insertAdjacentHTML("beforeend", block.tag);
    });

  }, [accumulateLetters?.slice(-1)[0]])

  const inspectLastPressedKey = (curKey) => {
    if (curKey === " " && lastPressedKey === "-") {
    }
  }

  const countSharpNum = (str) => {
    let count = 0;
    str.split('').forEach(letter => {
      if (letter === "#") count++;
    })
    return count;
  }

  const createNewTextBlock = (value) => {

    const targetValueArr = value.split('\n').map((targetValue) => {
      const textObj = {
        tag: '',
        contents: ''
      }

      textObj.contents = targetValue;

      switch (textObj.contents[0]) {
        case "#" :
          const num = countSharpNum(textObj.contents);
          textObj.tag = `<h${num}>${textObj.contents.slice(num)}</h${num}>`;
          break;
        case "-" :
          textObj.tag = `<li>${textObj.contents.slice(1)}</li>`;
          break;
        default :
          textObj.tag = `<p>${textObj.contents}</p>`;
          break;
      }
      return textObj;
    });
    setAccumulateLetters(targetValueArr);
  }

  const handleKeyDownEvent = (e) => {
    console.log("event", e.key, e.key === "Shift");
    const pressedKey = e.key;

    if (pressedKey !== "Shift" && pressedKey !== "Meta" && pressedKey !== "Enter" && pressedKey !== "Backspace" && pressedKey !== "ArrowRight" && pressedKey !== "") {
      if(lastPressedKey) {
        inspectLastPressedKey(pressedKey);
      }
    }

    if (pressedKey === "Enter") {
      createNewTextBlock(e.target.value);
    }

    if (pressedKey === "Backspace") {

    }
    setLastPressedKey(pressedKey);
  }

  return (
    <AddIssueLayout>
      <InputLayer>
        <AddIssueTitle>새로운 이슈 작성</AddIssueTitle>
        <TitleInput type={"text"} placeholder={"제목"} />
        <CommentLayer>
          <CommentInput
            // type={"text"}
            placeholder={"코멘트를 입력하세요"}
            onKeyDown={handleKeyDownEvent}
          />
          <CommentOutput ref={$OutputTextBox}>
            {/* {textBlock.contents} */}
          </CommentOutput>
        </CommentLayer>
        <AddFile type={"file"}/>
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

const CommentInput = styled.textarea`
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

const AddFile = styled.input`
  /* font-size: var(--TitleFontSize); */
`

export default AddIssuePage;
