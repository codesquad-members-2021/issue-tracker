import React from 'react'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { filterCheckboxListAtom } from '@components/common/atoms/filterAtom';
import { issueTitleInputAtom, issueCommentInputAtom } from '@components/common/atoms/issueInputAtom';
import { inputStyles } from '@components/common/baseStyle/baseStyle';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import API from '@/utils/API';
import useRecoilInput from '@/utils/hook/useRecoilInput';


type SendButtonType = {
  commentInputState: {
    value: string;
    onChange: any;
  }
}

const SendButton = ({ commentInputState }: SendButtonType) => {
  const classes = inputStyles();
  const history = useHistory();
  const [checkedItems] = useRecoilState(filterCheckboxListAtom);
  const { value: titleInputValue } = useRecoilInput(issueTitleInputAtom);

  const handleClickSendData = async () => {
    const data = {
      title: titleInputValue,
      mainCommentContents: commentInputState.value,
      authorId: 3, //수정필요 
      assigneeIds: checkedItems.manager.map(getCheckedItemId),
      labelIds: checkedItems.label.map(getCheckedItemId),
      milestoneId: checkedItems.milestone.length && checkedItems.milestone[0].id
    };

    const responseData = await API.post.issues(data);

    return history.push('/issueList');
  }

  return (
    <Button color="primary"
      variant="contained"
      className={classes.button}
      onClick={handleClickSendData}>
      완료
    </Button>
  )
}

type FilteredIdType = {
  info: {
    id: number;
  }
}

const getCheckedItemId = ({ info: { id } }: FilteredIdType) => id;

export default SendButton;
