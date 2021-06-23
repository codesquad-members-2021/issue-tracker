import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Header from '@components/common/Header';
import NewIssueContainer from '@components/newIssue/NewIssueContainer';
import styled from 'styled-components';
import { isClickedCompleteBtnAtom } from '@store/atoms/newIssue';

function NewIssue() {
  const [isClickedCompleteBtn, setIsClickedCompleteBtn] = useRecoilState(
    isClickedCompleteBtnAtom
  );

  useEffect(() => {
    if (isClickedCompleteBtn) setIsClickedCompleteBtn(false);
  }, []);

  return (
    <NewIssueWrap>
      <Header />
      <h2>새로운 이슈 작성</h2>
      <NewIssueContainer />
    </NewIssueWrap>
  );
}

export default NewIssue;

const NewIssueWrap = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  width: 1440px;
  height: 100%;

  h2 {
    width: 100%;
    height: 48px;
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    color: ${({ theme }) => theme.colors.gr_titleActive};
  }
`;
