import LabelMilestoneToggle from '@components/common/LabelMilestoneToggle';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { InputAdornment, InputBase } from '@material-ui/core';
import FilterTab from '@components/common/FilterTab';
import IconButton from '@components/common/IconButton';
import ArrowBottomIcon from '@/Icons/ArrowBottom.svg';
import SearchIcon from '@/Icons/Search.svg';

const issueFilterList = [
  { name: '열린 이슈' },
  { name: '내가 작성한 이슈' },
  { name: '나에게 할당된 이슈' },
  { name: '내가 댓글을 남긴 이슈' },
  { name: '닫힌 이슈' },
];

type HeadContentType = {
  handleClickShowFilterModal: (title: string) => () => void;
}

const HeadContent = ({ handleClickShowFilterModal }: HeadContentType) => {
  return (
    <HeadWrapper>
      <FilterWrapper>
        <FilterButton >
          <div onClick={handleClickShowFilterModal('issue')}>
            <span>필터</span>
            <img src={ArrowBottomIcon} alt=""
              style={{ transform: 'translateY(3px)' }} />
          </div>
          <FilterTab
            inputType='radio'
            header="issue"
            filterList={issueFilterList} />
        </FilterButton>
        <InputStyles
          startAdornment={
            <InputAdornment position="start" >
              <img src={SearchIcon} alt="" />
            </InputAdornment>
          }
        />
      </FilterWrapper>
      <ButtonsWrapper>
        <LabelMilestoneToggle />
        <Link to="/createIssue" style={{ textDecoration: 'none' }}>
          <IconButton icon="whitePlus" color="primary"
            variant="contained" background="#007AFF">
            이슈작성
          </IconButton>
        </Link>
      </ButtonsWrapper>
    </HeadWrapper>
  )
}

const HeadWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const FilterWrapper = styled.div`
  display:flex;
  width: 601px;
  height: 40px;
  border-radius: 11px;
  border: 1px solid #d9dbe9;
  box-shadow:0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

const FilterButton = styled.div`
  position:relative;
  min-width: 128px;
  background:#F7F7FC;
  border-radius: 11px 0 0 11px;
  padding-left: 24px;
  font-weight:700;
  place-self: center;
  &:hover{
    cursor:pointer;
  }
  & div> span{
    margin-right: 30px;
  }
`;

const InputStyles = styled(InputBase)`
  width:100%;
  padding-left: 10px;
  border-left: 1px solid #d9dbe9;
  background: #EFF0F6;
  border-radius: 0 11px 11px 0;
`;

const ButtonsWrapper = styled.div`
  display:flex;
  gap:2rem;
`;

export default HeadContent;
