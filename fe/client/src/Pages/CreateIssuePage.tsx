import HeadContent from '@components/createIssue/HeadContent';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tabs from '@components/createIssue/Tabs';
import CreateInputs from '@components/createIssue/CreateInputs';
import SendButton from '@components/createIssue/SendButton';
import IconButton from '@components/common/IconButton';
import useInput from '@/utils/hook/useInput';

const CreateIssuePage = () => {
  const commentInputState = useInput('');

  return (
    <>
      <HeadContent />
      <Hr />
      <ContentsWrapper>
        <ImageTag src="https://user-images.githubusercontent.com/61257242/121417591-0d02b480-c9a5-11eb-9c7e-d926e8731bfb.png" />
        <CreateInputs {...{ commentInputState }} />
        <Tabs />
      </ContentsWrapper>
      <Hr />
      <BottomContents>
        <Link to="/issueList" style={{ textDecoration: 'none' }}>
          <IconButton icon="close">
            <FontBold>작성취소</FontBold>
          </IconButton>
        </Link>
        <SendButton {...{ commentInputState }} />
      </BottomContents>
    </>
  )
}

const ContentsWrapper = styled.div`
  display:flex;
  margin: 32px 0;
`;

const ImageTag = styled.img`
  width: 44px;
  height:44px;
  margin-right: 16px;
  border-radius:50%;
`;

const Hr = styled.hr`
  margin:0;
  border-top:1px solid #D9DBE9;
`;

const BottomContents = styled.div`
  margin-top:32px;
  text-align: end;
`
const FontBold = styled.span`
  font-weight:700;
`;

export default CreateIssuePage
