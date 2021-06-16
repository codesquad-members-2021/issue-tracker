import IconButton from '@components/common/IconButton';
import { LabelItemType } from '@components/common/types/LabelType';
import NewLabel from './NewLabel';

const LabelEditItem = ({ name, color, description, setToggleLabel }: LabelItemType) => {
  return (
    <NewLabel title='레이블 편집' {...{ name, color, description }}>
      <IconButton variant="outlined" color="primary"
        icon='close' height="40px" margin="0 8px 0 0" onClick={setToggleLabel}>
        취소
      </IconButton>
      <IconButton variant="contained" color="primary"
        icon='edit' height="40px" background="#007AFF">
        완료
      </IconButton>
    </NewLabel >
  )
}

export default LabelEditItem;
