import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import ResponsiveLayout from '../components/common/ResponsiveLayout';
import Plus from '../components/common/icons/Plus';
import Close from '../components/common/icons/Close';
import DropDown from 'components/common/DropDown';

const AddIssuePage = () => {
  const [lastPressedKey, setLastPressedKey] = useState<any>();
  const [accumulateLetters, setAccumulateLetters] = useState<any>([]);
  
  const [filterInfo, setFilterInfo] = useState<any>({});
  const $OutputTextBox = useRef<any>()

  useEffect(() => {
    const fetchFilterMockData = async () => {
      const response = await fetch('/mockData.json');
      const result = await response.json();
      setFilterInfo(result[window.location.pathname]);
    }
    fetchFilterMockData();
  }, []);

  useEffect(() => {
    if ($OutputTextBox.current) {
      $OutputTextBox.current.innerHTML = "";
      accumulateLetters.forEach((block) => {
        $OutputTextBox.current.insertAdjacentHTML("beforeend", block.tag);
      });
      console.log("accumulateLetters",accumulateLetters);
    }
  }, [accumulateLetters?.slice(-1)[0]]) //제일 최근에 추가된 요소(마지막 요소)의 tag만 비교한다.

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

  if (Object.keys(filterInfo).length === 0) return <></>;
  return (
    <AddIssueLayout>
      <TitleBlock>
        <AddIssueTitle>새로운 이슈 작성</AddIssueTitle>
      </TitleBlock>
      <ProfilePictureBlock>

      </ProfilePictureBlock>
      <ContentBlock>
        <InputLayer>
          <TitleInput
            type={"text"}
            placeholder={"제목"}
          />
          <CommentLayer>
            <CommentInput
              placeholder={"코멘트를 입력하세요"}
              onKeyDown={handleKeyDownEvent}
            />
            <CommentOutput ref={$OutputTextBox}/>
          </CommentLayer>
          <AddFileLayer>
            <AddFile type={"file"}/>
          </AddFileLayer>
        </InputLayer>
        <OptionBlock>
          <OptionLayer>
            <DropDown info={filterInfo["AssigneeFilterInfo"]}/>
            <button><Plus/></button>
          </OptionLayer>
          <OptionLayer>
            <DropDown info={filterInfo["LabelFilterInfo"]}/>
            <button><Plus/></button>
          </OptionLayer>
          <OptionLayer>
            <DropDown info={filterInfo["MilestoneFilterInfo"]}/>
            <button><Plus/></button>
          </OptionLayer>
        </OptionBlock>
      </ContentBlock>
      <ButtonBlock>
        <CancelButton><Close/>작성 취소</CancelButton>
        <Link to="/issues"> 
          <UploadButton>완료</UploadButton> 
        </Link>
      </ButtonBlock>
    </AddIssueLayout>
  )
}

const AddIssueLayout = styled(ResponsiveLayout)`
  background-color: #F7F7FC;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  position: relative;
`
const TitleBlock = styled.div`
`
const ProfilePictureBlock = styled.div``

const ContentBlock = styled.div`
  display: flex;
  margin-top: 3.2rem;

  &::after {
    content: "";
    position: absolute;
    background-color: #D9DBE9;
    height: 1px;
    width: 128rem;
    top: 70rem;
    left: 8rem;
  }
`

const AddIssueTitle = styled.div`
  font-size: var(--TitleFontSize);
  width: 100%;
  margin-bottom: 3.2rem;

  &::after {
    content: "";
    position: absolute;
    background-color: #D9DBE9;
    height: 1px;
    width: 128rem;
    top: 5.6rem;
    left: 8rem;
  }
`
const InputLayer = styled(ResponsiveLayout)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 80px;
`
const TitleInput = styled.input`
  height: 5.6rem;
  margin-bottom: 1.6rem;
  border-radius: 1.4rem;
  background-color: #EFF0F6;
  border: none;
  padding: 0 2.4rem;
`

const CommentLayer = styled.div`
  display: flex;
  margin-bottom: 1.6rem;
`

const AddFileLayer = styled.div`
  border-radius: 1.4rem;
  background-color: #EFF0F6;
  border: none;
  padding: 2.4rem;
  color: #6E7191;
`

const CommentInput = styled.textarea`
  width: 50%;
  height: 34.3rem;
  border-radius: 1.4rem;
  background-color: #EFF0F6;
  border: none;
  padding: 2.4rem;
`

const CommentOutput = styled.div`
  width: 50%;
  height: 34.3rem;
  border-radius: 1.4rem;
  background-color: #EFF0F6;
  border: none;
  padding: 2.4rem;
  margin-left: 2rem;
`

const AddFile = styled.input`
  /* font-size: var(--TitleFontSize); */
`

const OptionBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 30.8rem;
  border-radius: 16px;
  border: 1px solid #D9DBE9;

  font-weight: bold;
  line-height: 28px;
  color: #6E7191;
  background-color: #FEFEFE;

  & > div {
    padding: 3.2rem 3.4rem;
  }

`

const OptionLayer = styled.div`
  display: flex;
  width: 22.4rem;

  & > button {
    margin-left: auto;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  & + & {
    border-top: 1px solid #D9DBE9;
  }
`
const ButtonBlock = styled.div`
  
`

const CancelButton = styled.button`
  border: none;
  background-color: transparent;
  width: 100px;
  height: 32px;
  color: #6E7191;
  cursor: pointer;
  font-weight: bold;

  position: absolute;
  top: 74rem;
  left: 100rem;

`

const UploadButton = styled.button`
  width: 24rem;
  height: 5.6rem;

  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #FEFEFE;
  background-color: #007AFF;
  opacity: 0.5;

  position: absolute;
  top: 73rem;
  left: 112rem;

  &:hover {
    background-color: #007AFF;
    opacity: 1;
  }
`

export default AddIssuePage;
