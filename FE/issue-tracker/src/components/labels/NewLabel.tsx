import styled from 'styled-components';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Checkbox,
} from '@chakra-ui/react';
import { ReactComponent as Refresh } from '@assets/refresh.svg';
import Label from '@components/labels/Label';
import {
  labelNameInput,
  labelDescInput,
  labelColorLeft,
  labelCheckbox,
} from '@components/labels/newLabelStyle';

function NewLabel() {
  const colorCode = '#EFF0F6';

  return (
    <NewLabelWrap>
      <h2>새로운 레이블 추가</h2>

      <NewLabelContent>
        <LabelTagBox>
          <Label name={'레이블 이름'} colorCode={colorCode} fontLight={false} />
        </LabelTagBox>

        <LabelInputBox>
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
        </LabelInputBox>
      </NewLabelContent>
    </NewLabelWrap>
  );
}

export default NewLabel;

const NewLabelWrap = styled.section`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  padding: 32px;
  border-radius: ${({ theme }) => theme.radii['2xl']};
  background-color: ${({ theme }) => theme.colors.gr_offWhite};
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-bottom: 16px;
  }
`;

const NewLabelContent = styled.div`
  display: flex;
`;
const LabelTagBox = styled.div`
  width: 330px;
  ${({ theme }) => theme.flexCenter};
`;
const LabelInputBox = styled.div`
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
