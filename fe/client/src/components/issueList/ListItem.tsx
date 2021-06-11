import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCallback } from 'react';
import { IssueListItemType } from '@components/common/types/APIType';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import { issueCheckedItemAtom, CheckBoxItemType, issueCheckedAllItemAtom } from '@components/common/atoms/checkBoxAtom';
type ListItemType = {
  issueItem: IssueListItemType
}

const ListItem = ({ issueItem }: ListItemType) => {
  const [checkedState, setCheckedState] = useState(false);
  const [, setCheckedIssueItems] = useRecoilState(issueCheckedItemAtom);
  const [isAllIssueChecked] = useRecoilState(issueCheckedAllItemAtom);
  
  const handleCheckChange = useCallback(({ id }) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(checkedState => !checkedState);
    const isChecked = event.target.checked;
    setCheckedIssueItems((checkedItems: CheckBoxItemType) => {
      isChecked ? checkedItems.add(id) : checkedItems.delete(id);
      return checkedItems;
    })
  }, []);

  useEffect(() => {
    setCheckedState(isAllIssueChecked);
  }, [isAllIssueChecked])

  return (
    <ListItemWrapper>
      <CheckBox type="checkbox" checked={checkedState} onChange={handleCheckChange({ id: issueItem.id })} />
    </ListItemWrapper>
  )
}

const ListItemWrapper = styled.div`

`;

const CheckBox = styled.input`
  margin-right: 33px;
`;
export default ListItem;
