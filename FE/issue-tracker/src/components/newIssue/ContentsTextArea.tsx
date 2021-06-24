import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { Textarea } from '@chakra-ui/textarea';

import {
  isClickedCompleteBtnAtom,
  newIssueTitleAtom,
  newIssueContentsAtom,
} from '@store/atoms/newIssue';
import { contentsInputStyle } from './style';

function ContentsTextArea() {
  const [numOfChars, setNumOfChars] = useState(0);
  const isClickedCompleteBtn = useRecoilValue(isClickedCompleteBtnAtom);
  const newIssueTitle = useRecoilValue(newIssueTitleAtom);
  const setNewIssueContents = useSetRecoilState(newIssueContentsAtom);
  const contentsInput = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isClickedCompleteBtn && contentsInput.current != null)
      setNewIssueContents(contentsInput.current.value);
  }, [newIssueTitle]);

  const handleChangeTextArea = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const length = target.value.length;
    if (numOfChars === length) return;
    setNumOfChars(length);
  };

  return (
    <>
      <Textarea
        {...contentsInputStyle}
        ref={contentsInput}
        onChange={handleChangeTextArea}
      />
      <Span>띄어쓰기 포함 {numOfChars} 자</Span>
    </>
  );
}

export default ContentsTextArea;

const Span = styled.div`
  right: 30px;
  bottom: 72px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.label};
  position: absolute;
`;
