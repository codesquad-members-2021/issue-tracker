import CreateButton from 'components/buttons/CreateButton';
import { useReducer } from 'react';
import styled from 'styled-components';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as XSvg } from 'icons/Xicon.svg';
import { LabelItemType } from 'types/issueType';
import LabelsItemInput from './LabelsItemInput';
const LabelsItemEdit = ({
  id,
  title,
  description,
  labelColor,
  textColor,
}: LabelItemType) => {
  const labelReducer = () => {};

//   const [state, dispatch] = useReducer(labelReducer, {
//     id,
//     title,
//     description,
//     labelColor, 
//     textColor,
//   });

  const clickHandler = (e: React.MouseEvent) => {};
  return (
    <StyledLabelsItemEdit>
      <LabelsItemEditTitle>레이블 편집</LabelsItemEditTitle>
      <LabelsItemInput/>
    </StyledLabelsItemEdit>
  );
};

export default LabelsItemEdit;



const StyledLabelsItemEdit = styled.div`
  ${({ theme }) => theme.style.flexColumn}
  padding: 2.25rem 2rem;
  box-sizing: border-box;
  border-top: 1px solid ${({ theme }) => theme.color.grayscale.line};
`;

const LabelsItemEditTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.XL};
`;

