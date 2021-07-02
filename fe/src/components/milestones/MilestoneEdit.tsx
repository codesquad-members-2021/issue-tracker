import Input from 'components/common/Input';
import { ChangeEvent, useReducer } from 'react';
import styled from 'styled-components';
import CreateButton from 'components/buttons/CreateButton';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as XSvg } from 'icons/Xicon.svg';
import { MilestonesItemLeftProps } from 'types/issueType';
import { milestoneReducer } from 'utils/reducer';
import { milestoneUpdateAtom } from 'stores/milestoneStore';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';

const milestoneParser = (str: string | null) => {
  switch (str) {
    case '제목':
      return 'Title';
    case '설명(선택)':
      return 'Description';
    default:
      return 'DueDate';
  }
};

const MilestoneEdit = ({
  id,
  title,
  description,
  dueDate,
  editClickHandler,
}: MilestonesItemLeftProps & {
  id: number;
  editClickHandler: (e: React.MouseEvent) => void;
}) => {
  const [milestoneState, setMilestoneState] = useReducer(milestoneReducer, {
    title,
    description,
    dueDate,
  });
  const setMilestoneUpdate = useSetRecoilState(milestoneUpdateAtom);
  const clickHandler = (e: React.MouseEvent) => {
    (async function () {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/milestones/${id}`, {
        title: milestoneState.title,
        description: milestoneState.description,
        due_date: milestoneState.dueDate,
      });
      setMilestoneUpdate((cur) => ++cur);
      editClickHandler(e); 
    })();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const type = milestoneParser(e.target.getAttribute('aria-label'));
    const payload = e.target.value;
    setMilestoneState({ type, payload });
  };

  return (
    <StyledMilestoneItemEdit>
      <MilestoneItemEditTitle>마일스톤 편집</MilestoneItemEditTitle>
      <MilestoneEditInputs>
        <Input
          label="제목"
          onChange={handleChange}
          value={milestoneState.title}
        />
        <Input
          label="완료일(선택)"
          onChange={handleChange}
          value={milestoneState.dueDate}
        />
      </MilestoneEditInputs>
      <Input
        label="설명(선택)"
        onChange={handleChange}
        value={milestoneState.description}
      />
      <EditButtons>
        <CreateButton white onClick={editClickHandler} icon={<CancelIcon />}>
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
