import styled from 'styled-components';

import { Textarea } from '@chakra-ui/textarea';
import { contentsInput } from '@components/newIssue/style';
import { ReactComponent as FileIcon } from '@assets/file.svg';

function TextArea() {
  return (
    <Description>
      <Textarea {...contentsInput} />
      <Span>띄어쓰기 포함 \d\d 자</Span>
      <ImageUploadWrap>
        <FileIcon />
        <span>파일 첨부하기</span>
      </ImageUploadWrap>
    </Description>
  );
}

export default TextArea;

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
