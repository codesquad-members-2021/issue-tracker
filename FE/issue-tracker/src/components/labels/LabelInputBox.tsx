import styled from 'styled-components';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Checkbox,
} from '@chakra-ui/react';
import { ReactComponent as Refresh } from '@assets/refresh.svg';
import Label from '@components/common/Label';
import {
  labelNameInput,
  labelDescInput,
  labelColorLeft,
  labelCheckbox,
} from '@components/labels/newLabelStyle';

interface Props {
  children: JSX.Element;
}

function LabelInputBox({ children }: Props) {
  const colorCode = '#EFF0F6';

  return (
    <NewLabelContent>
      <LabelTagBox>
        <Label name={'레이블 이름'} colorCode={colorCode} fontLight={false} />
      </LabelTagBox>

      <LabelInputsWrap>
        <Input {...labelNameInput} />
        <Input {...labelDescInput} />

        <LabelColorInput>
          <InputGroup size="md" width="240px" marginRight="16px">
            <InputLeftAddon {...labelColorLeft} children="배경 색상" />
            <Input value={colorCode} variant="filled" />
            <InputRightAddon
              children={<Refresh className="icon_refresh" />}
              border="none"
            />
          </InputGroup>
          <InputGroup size="md" width="352px" variant="filled">
            <InputLeftAddon {...labelColorLeft} children="텍스트 색상" />
            <Checkbox {...labelCheckbox} defaultIsChecked>
              어두운색
            </Checkbox>
            <Checkbox {...labelCheckbox}>밝은색</Checkbox>
            <InputRightAddon border="none" />
          </InputGroup>
        </LabelColorInput>
        {children}
      </LabelInputsWrap>
    </NewLabelContent>
  );
}

export default LabelInputBox;

const NewLabelContent = styled.div`
  display: flex;
`;
const LabelTagBox = styled.div`
  width: 330px;
  ${({ theme }) => theme.flexCenter};
`;
const LabelInputsWrap = styled.div`
  width: 100%;
`;
const LabelColorInput = styled.div`
  display: flex;
  .icon_refresh {
    path {
      stroke: ${({ theme }) => theme.colors.gr_label};
    }
  }
`;
