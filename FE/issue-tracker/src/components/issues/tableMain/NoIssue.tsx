import styled from 'styled-components';

interface Prop {
  isSearched: boolean;
}

function NoIssue({ isSearched }: Prop) {
  const issueWithSearch = '검색과 일치하는 결과가 없습니다.';
  const issueNone = '등록된 이슈가 없습니다.';
  return (
    <NoIssueWrap>
      <span>{isSearched ? issueWithSearch : issueNone}</span>
    </NoIssueWrap>
  );
}

export default NoIssue;

const NoIssueWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.gr_offWhite};
`;
