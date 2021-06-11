import styled from 'styled-components';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import { issueCheckedItemAtom, issueCheckedAllItemAtom } from '@components/common/atoms/checkBoxAtom';

const ListHeader = ({ issueItems }: any) => {
  const [, setCheckedIssueItems] = useRecoilState(issueCheckedItemAtom);
  const [isAllIssueChecked, setAllIssueChecked] = useRecoilState(issueCheckedAllItemAtom);

  const handleChangeAllCheck = () => {
    isAllIssueChecked
      ? setCheckedIssueItems(new Set(issueItems.map(({ id }: { id: number }) => id)))
      : setCheckedIssueItems(new Set());
    setAllIssueChecked(!isAllIssueChecked);
  };

  return (
    <ListHeaderWrapper>
      <AllCheckerInput type="checkbox" checked={isAllIssueChecked} onChange={handleChangeAllCheck} />
    </ListHeaderWrapper>
  )
}

const ListHeaderWrapper = styled.div`

`;

const AllCheckerInput = styled.input`
  margin-right: 33px;
`;
export default ListHeader;
