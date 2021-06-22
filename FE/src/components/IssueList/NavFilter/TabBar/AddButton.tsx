import styled from 'styled-components';
import PrimaryButton from 'components/Common/PrimaryButton';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const AddButton = ({ ...props }) => (
  <AddButtonLayout btnStyle="small" { ...props }>
    <Link to="/issues/write">
      <AddIcon />
      이슈 작성
    </Link>
  </AddButtonLayout>
);
export default AddButton;

// --- Styled Components ---
const AddButtonLayout = styled(PrimaryButton)`
  height: 100%;
  a {
    display: flex;
    color: #fff;
    text-decoration: none;
  }
`;