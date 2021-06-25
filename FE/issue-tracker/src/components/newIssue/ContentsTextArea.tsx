import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { Textarea } from '@chakra-ui/textarea';

import { newIssueContentsAtom } from '@store/atoms/newIssue';
import { contentsInputStyle } from './style';

function ContentsTextArea() {
  const [newIssueContents, setNewIssueContents] =
    useRecoilState(newIssueContentsAtom);

  const handleChangeTextArea = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const contents = target.value;
    setNewIssueContents(contents);
  };

  return (
    <>
      <Textarea {...contentsInputStyle} onChange={handleChangeTextArea} />
      <Span>띄어쓰기 포함 {newIssueContents.length} 자</Span>
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
