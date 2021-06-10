import styled from 'styled-components';
import PrimaryButton from '../../../Common/PrimaryButton';
import AddIcon from '@material-ui/icons/Add';

const AddButton = ({ ...props }) => (
  <AddButtonLayout btnStyle="small" { ...props }>
    <AddIcon />
    이슈 작성
  </AddButtonLayout>
);
export default AddButton;

// --- Styled Components ---
const AddButtonLayout = styled(PrimaryButton)`height: 100%;`;