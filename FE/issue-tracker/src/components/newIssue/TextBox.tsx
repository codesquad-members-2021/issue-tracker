import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';

import { ReactComponent as FileIcon } from '@assets/file.svg';
import { contentsInput, titleInput } from './style';
import { isInputtedTitleState } from '@store/atoms/newIssue';

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
      <Description>
        <Textarea {...contentsInput} />
        <Span>띄어쓰기 포함 \d\d 자</Span>
        <ImageUploadWrap>
          <FileIcon />
          <span>파일 첨부하기</span>
        </ImageUploadWrap>
      </Description>
    </TextBoxWrap>
  );
}

export default TextBox;

const TextBoxWrap = styled.div`
  margin: 0 32px 0 16px;
  width: 880px;
`;

const Description = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.gr_inputBackground};
  border-radius: ${({ theme }) => theme.radii['2xl']};
`;

const Span = styled.div`
  right: 30px;
  bottom: 72px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.label};
  position: absolute;
`;

const ImageUploadWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  height: 52px;
  color: ${({ theme }) => theme.colors.label};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-top: 1px dotted ${({ theme }) => theme.colors.gr_line};
  cursor: pointer;

  span {
    padding-left: 10px;
  }
`;
