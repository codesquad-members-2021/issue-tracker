import { Button, Divider } from '@material-ui/core';
import { ReactComponent as LabelIconSvg } from 'icons/label.svg';
import { ReactComponent as MilestoneIconSvg } from 'icons/openMilestone.svg';
import CreateButton from 'components/buttons/CreateButton';
import { NavType } from 'types/issueType';
import styled from 'styled-components';
import { getNavButtonTitle } from 'utils/util';
import { useRecoilValue } from 'recoil';
import { totalCountOfLabels } from 'stores/labelStore';
import { Link, useHistory } from 'react-router-dom';
import { MouseEvent } from 'react';
import { totalCountOfMilestone } from 'stores/milestoneStore';
import { ReactComponent as PlusIconSvg } from 'icons/plus.svg';
const NavbarButtons = ({
  type,
  setPopup,
}: {
  type: NavType;
  setPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const MilestoneCnt = useRecoilValue(totalCountOfMilestone);
  const LabelCnt = useRecoilValue(totalCountOfLabels);
  const history = useHistory();
  const clickHandler = (event: MouseEvent) => {
    if (type === 'All') history.push('/issues/new-issue');
    if (setPopup && type !== 'All') setPopup((popup) => !popup);
  };
  return (
    <StyledNavbarButtons>
      <LabelAndMilestone>
        <Link to="/labels">
          <LabelButton buttontype={type} startIcon={<LabelIcon />}>
            <div className="button-text">레이블</div>
            <div className="button-count">({LabelCnt})</div>
          </LabelButton>
        </Link>
        <Divider orientation="vertical" flexItem />
        <Link to="/milestones">
          <MilestoneButton buttontype={type} startIcon={<MilestoneIcon />}>
            <div className="button-text">마일스톤</div>
            <div className="button-count">({MilestoneCnt})</div>
          </MilestoneButton>
        </Link>
      </LabelAndMilestone>
      <CreateButton icon={<PlusIcon />} onClick={clickHandler}>
        {getNavButtonTitle(type)}
      </CreateButton>
    </StyledNavbarButtons>
  );
};

export default NavbarButtons;

const PlusIcon = styled(PlusIconSvg)`
  path {
    stroke: ${({ theme }) => theme.color.grayscale.offWhite};
  }
`;

const StyledNavbarButtons = styled.div`
  ${({ theme }) => theme.style.flexSpaceBetween};
`;
const LabelAndMilestone = styled.div`
  border-radius: ${({ theme }) => theme.border.radius.S};
  border: 1px solid ${({ theme }) => theme.color.grayscale.line};
  display: flex;
`;

const LabelIcon = styled(LabelIconSvg)`
  path {
    stroke: ${({ theme }) => theme.color.grayscale.label};
  }
`;

const MilestoneIcon = styled(MilestoneIconSvg)``;

const LabelButton = styled(Button)<{ buttontype: NavType }>`
  width: 10rem;
  height: 2.5rem;
  border-radius: 0.7rem 0 0 0.7rem;
  color: ${({ theme }) => theme.color.grayscale.label};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  background-color: ${({ buttontype, theme }) => {
    if (buttontype === 'Label') return theme.color.grayscale.line;
  }};
  .button-text {
    margin-right: 0.5rem;
  }
`;

const MilestoneButton = styled(Button)<{ buttontype: NavType }>`
  width: 10rem;
  height: 2.5rem;
  border-radius: 0 0.7rem 0.7rem 0;
  color: ${({ theme }) => theme.color.grayscale.label};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  background-color: ${({ buttontype, theme }) => {
    if (buttontype === 'Milestone') return theme.color.grayscale.line;
  }};
  .button-text {
    margin-right: 0.5rem;
  }
`;
