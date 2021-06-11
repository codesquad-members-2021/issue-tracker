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
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-top: none;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.gr_offWhite};
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-bottom: 16px;
  }
  .icon_edit {
    margin-right: 5px;
    path {
      stroke: ${({ theme }) => theme.colors.gr_offWhite};
    }
  }
  .icon_cancel {
    margin-right: 5px;
    path {
      stroke: ${({ theme }) => theme.colors.bl_initial};
    }
  }
`;
