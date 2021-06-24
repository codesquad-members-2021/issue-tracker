import Input from 'components/common/Input';
import { ChangeEvent, useReducer } from 'react';
import styled from 'styled-components';
import CreateButton from 'components/buttons/CreateButton';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as XSvg } from 'icons/Xicon.svg';
import { ReactComponent as PlusSvg } from 'icons/plus.svg';
import { milestoneReducer } from 'utils/reducer';
import { milestoneUpdateAtom } from 'stores/milestoneStore';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { milestoneParser } from 'utils/util';

const NewMilestone = ({
  setPopup,
}: {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [milestoneState, setMilestoneState] = useReducer(milestoneReducer, {
    title: '',
    description: '',
    dueDate: '',
  });
  const setMilestoneUpdate = useSetRecoilState(milestoneUpdateAtom);
  const clickHandler = (e: React.MouseEvent) => {
    (async function () {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/milestones`, {
        title: milestoneState.title,
        description: milestoneState.description,
        due_date: milestoneState.dueDate,
      });
      setMilestoneUpdate((cur) => ++cur);
      setPopup((popup) => !popup);
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
        <CreateButton onClick={clickHandler} icon={<PlusIcon />}>
          완료
        </CreateButton>
      </EditButtons>
    </StyledMilestoneItemEdit>
  );
};

export default NewMilestone;

const StyledMilestoneItemEdit = styled.div`
  margin: 1.5rem 0;
  ${({ theme }) => theme.style.flexColumn}
  padding: 2.25rem 2rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.grayscale.line};
  border-radius: ${({ theme }) => theme.border.radius.S};
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

const PlusIcon = styled(PlusSvg)`
  path {
    stroke: inherit;
  }
`;
