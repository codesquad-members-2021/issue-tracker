import Input from 'components/common/Input';
import { ChangeEvent } from 'react';
import styled from 'styled-components';
import CreateButton from 'components/buttons/CreateButton';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as XSvg } from 'icons/Xicon.svg';

const MilestoneEdit = () => {
    const clickHandler = (e: React.MouseEvent) => {};
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};
  return (
    <StyledMilestoneItemEdit>
      <MilestoneItemEditTitle>마일스톤 편집</MilestoneItemEditTitle>
      <MilestoneEditInputs>
        <Input label="제목" onChange={handleChange} />
        <Input label="완료일(선택)" onChange={handleChange} />
      </MilestoneEditInputs>
      <Input label="설명(선택)" onChange={handleChange} />
      <EditButtons>
          <CreateButton white onClick={clickHandler} icon={<CancelIcon />}>
            취소
          </CreateButton>
          <CreateButton onClick={clickHandler} icon={<EditIcon />}>
            완료
          </CreateButton>
        </EditButtons>
    </StyledMilestoneItemEdit>
  );
};

export default MilestoneEdit;

const StyledMilestoneItemEdit = styled.div`
  ${({ theme }) => theme.style.flexColumn}
  padding: 2.25rem 2rem;
  box-sizing: border-box;
  border-top: 1px solid ${({ theme }) => theme.color.grayscale.line};
`;

const MilestoneItemEditTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.XL};
  margin-bottom: 1rem;
`;

const MilestoneEditInputs = styled.div`
${({ theme }) => theme.style.flexSpaceBetween};

  div {
    width: 45%;
  }
`;
const EditButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const EditIcon = styled(EditSvg)`
  path {
    stroke: inherit;
  }
`;
const CancelIcon = styled(XSvg)`
  path {
    stroke: inherit;
  }
`;
