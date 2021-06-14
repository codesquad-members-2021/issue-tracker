import styled from 'styled-components';
import ResponsiveLayout from '../components/common/ResponsiveLayout';

const AddIssuePage = () => {
  return (
    <AddIssueLayout>
      <InputLayer>
        <AddIssueTitle>새로운 이슈 작성</AddIssueTitle>
        <TitleInput type={"text"} placeholder={"제목"}></TitleInput>
        <CommentInput type={"text"} placeholder={"코멘트를 입력하세요"}></CommentInput>
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
  /* border-radius: 1.4rem; */
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
const CommentInput = styled.input`
  width: 88rem;
  height: 34.3rem;
  border-radius: 1.4rem;
  background-color: #EFF0F6;
  border: none;
  padding: 0 2.4rem;
`
export default AddIssuePage;
