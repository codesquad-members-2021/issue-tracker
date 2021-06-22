import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { Input } from '@chakra-ui/input';
import { titleInput } from './style';

import { isInputtedTitleState } from '@store/atoms/newIssue';

import CommonTextArea from '@components/common/CommonTextArea';

function TextBox() {
  const [isInputtedTitle, setIsInputtedTitle] =
    useRecoilState(isInputtedTitleState);

  const handleChangeTitle = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (!isInputtedTitle && target.value.length > 0) setIsInputtedTitle(true);
    else if (isInputtedTitle && target.value.length === 0)
      setIsInputtedTitle(false);
  };

  return (
    <TextBoxWrap>
      <Input {...titleInput} onChange={handleChangeTitle} />
      <CommonTextArea />
    </TextBoxWrap>
  );
}

export default TextBox;

const TextBoxWrap = styled.div`
  margin: 0 32px 0 16px;
  width: 880px;
`;
