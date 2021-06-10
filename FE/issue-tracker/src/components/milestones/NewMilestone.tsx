import styled from 'styled-components';
import MilestoneInputBox from '@components/milestones/MilestoneInputBox';
import CompleteBtn from '@components/common/CompleteBtn';

function NewMilestone() {
  return (
    <NewMilestoneWrap>
      <h2>새로운 마일스톤 추가</h2>
      <MilestoneInputBox>
        <CompleteBtn />
      </MilestoneInputBox>
    </NewMilestoneWrap>
  );
}

export default NewMilestone;

const NewMilestoneWrap = styled.section`
  ${({ theme }) => theme.newLabelMilestoneWrap};
`;
