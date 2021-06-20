import NewLabel from './NewLabel';
import IconButton from '@components/common/IconButton';
import { LabelItemType } from '@components/common/types/LabelType';
import useInput from '@/utils/hook/useInput';
import API from '@/utils/API';

const LabelEditItem = ({ id, name, color, description, setToggleLabel }: LabelItemType) => {
  const labelNameState = useInput(name);
  const labelDescState = useInput(description);
  const labelColorState = useInput(color);

  const handleClickLabelEdit = async () => {
    const putData = {
      name: labelNameState.value,
      description: labelDescState.value,
      color: labelColorState.value
    }
    const responseData = await API.put.labels(id, putData);
    console.log(responseData)
  }

  return (
    <NewLabel title='레이블 편집' {...{ labelNameState, labelDescState, labelColorState }}>
      <IconButton variant="outlined" color="primary"
        icon='close' height="40px" margin="0 8px 0 0" onClick={setToggleLabel}>
        취소
      </IconButton>
      <IconButton variant="contained" color="primary"
        icon='edit' height="40px" background="#007AFF" onClick={handleClickLabelEdit}>
        완료
      </IconButton>
    </NewLabel >
  )
}

export default LabelEditItem;
