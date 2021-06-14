import {
  Button,
  ButtonBase,
  Divider,
  InputAdornment,
  InputBase,
  TextField,
} from '@material-ui/core';
import IssueFilter from 'components/common/IssueFilter';
import styled from 'styled-components';
import { ReactComponent as SearchIconSvg } from 'icons/search.svg';
import { ReactComponent as PlusIconSvg } from 'icons/pluse.svg';
import { ReactComponent as LabelIconSvg } from 'icons/label.svg';
import { ReactComponent as MilestoneIconSvg } from 'icons/openMilestone.svg';

const Navbar = () => {
  return (
    <Nav>
      <NavbarLeft>
        <IssueFilter />
        <FilterSearchBar
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {/* <TextField
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        /> */}
      </NavbarLeft>

      <NavbarRight>
        <LabelAndMilestone>
          <LabelButton startIcon={<LabelIcon />}>
            <div className="button-text">레이블</div>
            <div className="button-count">(0)</div>
          </LabelButton>
          <Divider orientation="vertical" flexItem />
          <MilestoneButton startIcon={<MilestoneIcon />}>
            <div className="button-text">마일스톤</div>
            <div className="button-count">(0)</div>
          </MilestoneButton>
        </LabelAndMilestone>
        <NewIssueButton startIcon={<PlusIcon />}>이슈 작성</NewIssueButton>
      </NavbarRight>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  ${({ theme }) => theme.style.flexSpaceBetween};
  margin-bottom: 1.5rem;
`;

const FilterSearchBar = styled(InputBase)`
  width: 30rem;
  height: 2.5rem;
  padding: 0;
  border-radius: 0px 11px 11px 0px;
  border-left: 1px solid ${({ theme }) => theme.color.grayscale.line};
  background-color: ${({ theme }) => theme.color.grayscale.inputBG};
  color: ${({ theme }) => theme.color.grayscale.placeholder};
  padding-left: 1.625rem;
`;

const NavbarLeft = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.grayscale.line};
  border-radius: ${({ theme }) => theme.border.radius.S};
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const LabelAndMilestone = styled.div`
  border-radius: ${({ theme }) => theme.border.radius.S};
  border: 1px solid ${({ theme }) => theme.color.grayscale.line};
  display: flex;
`;

const NewIssueButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.grayscale.offWhite};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  width: 7.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.border.radius.S};
  margin-left: 1rem;
`;

const SearchIcon = styled(SearchIconSvg)``;

const PlusIcon = styled(PlusIconSvg)`
  path {
    stroke: ${({ theme }) => theme.color.grayscale.offWhite};
  }
`;

const LabelIcon = styled(LabelIconSvg)`
  path {
    stroke: ${({ theme }) => theme.color.grayscale.label};
  }
`;

const MilestoneIcon = styled(MilestoneIconSvg)``;

const LabelButton = styled(Button)`
  width: 10rem;
  height: 2.5rem;
  border-radius: 0.7rem 0 0 0.7rem;
  color: ${({ theme }) => theme.color.grayscale.label};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};

  .button-text {
    margin-right: 0.5rem;
  }
`;

const MilestoneButton = styled(Button)`
  width: 10rem;
  height: 2.5rem;
  border-radius: 0 0.7rem 0.7rem 0;
  color: ${({ theme }) => theme.color.grayscale.label};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};

  .button-text {
    margin-right: 0.5rem;
  }
`;

export default Navbar;
