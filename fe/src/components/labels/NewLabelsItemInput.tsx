import { useReducer, ChangeEvent } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import Input from 'components/common/Input';
import Label from 'components/common/Label';
import CreateButton from 'components/buttons/CreateButton';
import LabelTextColorInput from './LabelTextColorInput';
import LabelColorInput from './LabelColorInput';
import { ReactComponent as PlusSvg } from 'icons/plus.svg';

import { labelReducer } from 'utils/reducer';
import { labelParser } from 'utils/util';
import { labelUpdateAtom } from 'stores/labelStore';

const NewLabelsItemInput = ({
  setPopup,
}: {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [labelState, setLabelState] = useReducer(labelReducer, {
    id: 0,
    title: '새로운레이블',
    description: '',
    labelColor: '#185ADB',
    textColor: 'light',
  });

  const textColorClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = 'TextColor';
    const payload = e.currentTarget.id === 'dark' ? 'dark' : 'light';
    setLabelState({ type, payload });
  };
  const setLabelUpdate = useSetRecoilState(labelUpdateAtom);

  const createClickHandler = (e: React.MouseEvent) => {
    (async function () {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/labels`, {
        title: labelState.title,
        description: labelState.description,
        color_code: labelState.labelColor,
        font_light: labelState.textColor === 'light',
      });
      setLabelUpdate((cur) => ++cur);
      setPopup((popup) => !popup);
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
          <CreateButton onClick={createClickHandler} icon={<PlusIcon />}>
            완료
          </CreateButton>
        </EditButtons>
      </LabelsInputs>
    </StyledLabelsItemInput>
  );
};

export default NewLabelsItemInput;

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

const PlusIcon = styled(PlusSvg)`
  path {
    stroke: inherit;
  }
`;
