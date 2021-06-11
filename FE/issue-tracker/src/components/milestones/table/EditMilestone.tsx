import styled from 'styled-components';
import MilestoneInputBox from '@components/milestones/MilestoneInputBox';
import EditCompleteBtn from '@components/common/EditCompleteBtn';

function EditMilestone() {
  return (
    <div>
      <EditMilestoneWrap>
        <h2>마일스톤 편집</h2>
        <MilestoneInputBox>
          <EditCompleteBtn />
        </MilestoneInputBox>
      </EditMilestoneWrap>
    </div>
  );
}

export default EditMilestone;

const EditMilestoneWrap = styled.section`
  ${({ theme }) => theme.editLabelMilestoneWrap};
`;
