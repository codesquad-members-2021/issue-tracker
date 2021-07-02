import { instanceWithAuth } from 'api';
import Filter from 'components/common/Filter';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { detailIssueUpdateAtom } from 'stores/detailIssueStore';
import { clickedIssueIdAtom } from 'stores/issueStore';
import { NewIssuesIdQuery, NewIssuesIdType } from 'stores/NewIssuesSideStore';
import styled from 'styled-components';
import { SidebarListType } from 'types/issueType';
import { deepCopied, getTitle } from 'utils/util';

const SidebarList = ({ type }: { type: SidebarListType }) => {
  const location = useLocation();
  const [newIssuesId, setNewIssuesId] = useRecoilState(NewIssuesIdQuery);
  const clickedIssueId = useRecoilValue(clickedIssueIdAtom);
  const setDetailIssueUpdate = useSetRecoilState(detailIssueUpdateAtom);
  // const [toggle, setToggle] =
  const clickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    setNewIssuesId((state) => {
      const copiedData = deepCopied<NewIssuesIdType>(state);
      if (type === 'labelList') {
        copiedData[type].push(+e.currentTarget.id);
      } else {
        copiedData[type] = [+e.currentTarget.id];
      }
      return copiedData;
    });
    // useEffect(() => {

    // }, [toggle])
    if (location.pathname.split('/')[2] !== 'new-issue') {
      (async () => {
        let data = {
          milestoneList: { milestone: newIssuesId.milestoneList[0] },
          labelList: { label: newIssuesId.labelList },
          assigneeList: { assignee: newIssuesId.assigneeList[0] },
        };
        // console.log(data[type])
        // try {
        //   await instanceWithAuth.patch(
        //     `${process.env.REACT_APP_API_URL}/api/issues/${clickedIssueId}`,
        //     data[type]
        //   );
        // } catch (error) {
        //   console.error('이슈 수정 요청 실패');
        // }
        // setDetailIssueUpdate((cur) => ++cur);
      })();
    }
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
