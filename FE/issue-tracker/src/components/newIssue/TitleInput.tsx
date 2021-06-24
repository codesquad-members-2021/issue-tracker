import { useEffect, useRef } from 'react';
import { Input } from '@chakra-ui/input';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import {
  isInputtedTitleAtom,
  isClickedCompleteBtnAtom,
  newIssueTitleAtom,
} from '@store/atoms/newIssue';
import { titleInputStyle } from './style';

function TitleInput() {
  const [isInputtedTitle, setIsInputtedTitle] =
    useRecoilState(isInputtedTitleAtom);
  const isClickedCompleteBtn = useRecoilValue(isClickedCompleteBtnAtom);
  const setNewIssueTitle = useSetRecoilState(newIssueTitleAtom);
  const titleInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isClickedCompleteBtn && titleInput.current != null)
      setNewIssueTitle(titleInput.current.value);
  }, [isClickedCompleteBtn]);

  const handleChangeTitle = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (!isInputtedTitle && target.value.length > 0) setIsInputtedTitle(true);
    else if (isInputtedTitle && target.value.length === 0)
      setIsInputtedTitle(false);
  };

  return (
    <>
      <Input
        {...titleInputStyle}
        ref={titleInput}
        onChange={handleChangeTitle}
      />
    </>
  );
}

export default TitleInput;
