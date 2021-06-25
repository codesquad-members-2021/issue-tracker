import Filter from 'components/common/Filter';
import { useRecoilState } from 'recoil';
import { NewIssuesIdQuery, NewIssuesIdType } from 'stores/NewIssuesSideStore';
import styled from 'styled-components';
import { SidebarListType } from 'types/issueType';
import { deepCopied, getTitle } from 'utils/util';

const SidebarList = ({ type }: { type: SidebarListType }) => {
  const [newIssuesId, setNewIssuesId] = useRecoilState(NewIssuesIdQuery);

  const clickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    setNewIssuesId((state) => {
      const copiedData = deepCopied<NewIssuesIdType>(state);
      copiedData[type].push(+e.currentTarget.id);
      return copiedData;
    });
  };
  return (
    <StyledSidebarList>
      <span>{getTitle(type)}</span>
      <Filter
        filterType={type}
        isPlus={true}
        value={newIssuesId[type]}
        clickHandler={clickHandler}
        setState={setNewIssuesId}
      />
    </StyledSidebarList>
  );
};

export default SidebarList;

const StyledSidebarList = styled.li`
  ${({ theme }) => theme.style.flexSpaceBetween};
  padding: 1.5rem 2rem;
  box-sizing: border-box;
`;
