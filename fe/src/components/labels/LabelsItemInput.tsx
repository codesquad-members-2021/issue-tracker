import Input from 'components/common/Input';
import Label from 'components/common/Label';
import CreateButton from 'components/buttons/CreateButton';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as XSvg } from 'icons/Xicon.svg';
import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import LabelTextColorInput from './LabelTextColorInput';
import LabelColorInput from './LabelColorInput';

const LabelsItemInput = () => {
  const title = 'document';
  const labelColor = '#007AFF';
  const textColor = 'light';
  const clickHandler = (e: React.MouseEvent) => {};
  const [text, setText] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  return (
    <StyledLabelsItemInput>
      <LabelsInputDisplay>
        <Label {...{ title, labelColor, textColor }} />
      </LabelsInputDisplay>
      <LabelsInputs>
        <Input label="레이블 이름" onChange={handleChange} />
        <Input label="설명(선택)" onChange={handleChange} />
        <LabelColorSection>
          <LabelColorInput onChange={handleChange} />
          <LabelTextColorInput />
        </LabelColorSection>
        <EditButtons>
          <CreateButton white onClick={clickHandler} icon={<CancelIcon />}>
            취소
          </CreateButton>
          <CreateButton onClick={clickHandler} icon={<EditIcon />}>
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
