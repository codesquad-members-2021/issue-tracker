import HeadContent from '@components/createIssue/HeadContent';
import styled from 'styled-components';
import Tabs from '@components/createIssue/Tabs';
import Button from '@material-ui/core/Button';
import IconButton from '@components/common/IconButton';
import { inputStyles } from '@components/common/baseStyle/baseStyle';
import InputField from '@components/createIssue/InputField';
import { Link } from 'react-router-dom';

const CreateIssuePage = () => {
  const classes = inputStyles();

  return (
    <>
      <HeadContent />
      <Hr />
      <ContentsWrapper>
        <ImageTag src="https://user-images.githubusercontent.com/61257242/121417591-0d02b480-c9a5-11eb-9c7e-d926e8731bfb.png" />
        <InputField />
        <Tabs />
      </ContentsWrapper>
      <Hr />
      <BottomContents>
        <Link to="/issueList" style={{ textDecoration: 'none' }}>
          <IconButton icon="close">
            <FontBold>작성취소</FontBold>
          </IconButton>
        </Link>
        <Button color="primary"
          variant="contained"
          className={classes.button}>완료</Button>
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
