import Input from 'components/common/Input';
import Label from 'components/common/Label';
import CreateButton from 'components/buttons/CreateButton';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as XSvg } from 'icons/Xicon.svg';
import { ChangeEvent } from 'react';
import styled from 'styled-components';
import LabelTextColorInput from './LabelTextColorInput';
import LabelColorInput from './LabelColorInput';
import { LabelItemType } from 'types/issueType';
import { useReducer } from 'react';
import { labelUpdateAtom } from 'store';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { labelReducer } from 'utils/reducer';

const labelParser = (str: string | null) => {
  switch (str) {
    case '레이블 이름':
      return 'Title';
    case '설명(선택)':
      return 'Description';
    case '배경색상':
      return 'LabelColor';
    default:
      return 'TextColor';
  }
};

const LabelsItemInput = ({
  id,
  title,
  description,
  labelColor,
  textColor,
  clickHandler,
}: LabelItemType & { clickHandler: (e: React.MouseEvent) => void }) => {
  const [labelState, setLabelState] = useReducer(labelReducer, {
    id,
    title,
    description,
    labelColor,
    textColor,
  });

  const textColorClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = 'TextColor';
    const payload = e.currentTarget.id === 'dark' ? 'dark' : 'light';
    setLabelState({ type, payload });
  };
  const setLabelUpdate = useSetRecoilState(labelUpdateAtom);

  const editClickHandler = (e: React.MouseEvent) => {
    (async function () {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/labels/${id}`, {
        title: labelState.title,
        description: labelState.description,
        color_code: labelState.labelColor,
        font_light: labelState.textColor === 'light',
      });
      setLabelUpdate((cur) => ++cur);
      clickHandler(e);
    })();
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const type = labelParser(e.target.getAttribute('aria-label'));
    const payload = e.target.value;

    if (type !== 'TextColor') {
      setLabelState({ type, payload });
    }
  };

  return (
    <StyledLabelsItemInput>
      <LabelsInputDisplay>
        <Label
          title={labelState.title}
          labelColor={labelState.labelColor}
          textColor={labelState.textColor}
        />
      </LabelsInputDisplay>
      <LabelsInputs>
        <Input
          label="레이블 이름"
          onChange={changeHandler}
          value={labelState.title}
        />
        <Input
          label="설명(선택)"
          onChange={changeHandler}
          value={labelState.description}
        />
        <LabelColorSection>
          <LabelColorInput
            onChange={changeHandler}
            value={labelState.labelColor}
          />
          <LabelTextColorInput
            clickHandler={textColorClickHandler}
            value={labelState.textColor}
          />
        </LabelColorSection>
        <EditButtons>
          <CreateButton white onClick={clickHandler} icon={<CancelIcon />}>
            취소
          </CreateButton>
          <CreateButton onClick={editClickHandler} icon={<EditIcon />}>
            완료
          </CreateButton>
        </EditButtons>
      </LabelsInputs>
    </StyledLabelsItemInput>
  );
};

export default LabelsItemInput;

const LabelColorSection = styled.div`
  display: flex;
`;

const StyledLabelsItemInput = styled.div`
  display: flex;
`;

const LabelsInputs = styled.div`
  ${({ theme }) => theme.style.flexColumn}
  width: 75%;
`;

const LabelsInputDisplay = styled.div`
  width: 25%;
  ${({ theme }) => theme.style.flexCenter}
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
