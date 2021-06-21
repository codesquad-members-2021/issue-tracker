import styled from 'styled-components';
import InputField from '@components/common/InputField';
import { issueTitleInputAtom } from '@components/common/atoms/issueInputAtom';
import CommentInput from '@components/common/CommentInput';
import useRecoilInput from '@/utils/hook/useRecoilInput';

const CreateInputs = ({ commentInputState }: any) => {
  const titleInputState = useRecoilInput(issueTitleInputAtom);
  return (
    <InputWrapper>
      <InputField {...titleInputState} />
      <CommentInput {...{ commentInputState }} />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  width:100%;
`;


export default CreateInputs;
