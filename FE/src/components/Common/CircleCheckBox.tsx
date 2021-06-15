import styled from 'styled-components';
import { Checkbox } from '@material-ui/core';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

const CircleCheckBox = ({ ...props }) => (
  <CheckboxLayout
    {...props}
    icon={<CircleUnchecked />}
    checkedIcon={<CircleChecked />}
  />
);

export default CircleCheckBox;

// --- Styled Components ---
const CheckboxLayout = styled(Checkbox)`
  padding: 0;
  margin: 0;
`;
