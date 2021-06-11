import styled from 'styled-components';
import SelectBox from '@components/newIssue/SelectBox';
import DeleteMiniButton from '@components/common/DeleteMiniButton';

function IssueSidebar() {
  return (
    <IssueSidebarContainner>
      <SelectBox />
      <DeleteButtonBox>
        <DeleteMiniButton>이슈 삭제</DeleteMiniButton>
      </DeleteButtonBox>
    </IssueSidebarContainner>
  );
}

export default IssueSidebar;

const IssueSidebarContainner = styled.div``;

const DeleteButtonBox = styled.div`
  padding: 18px 24px;
  display: flex;
  justify-content: flex-end;
`;
