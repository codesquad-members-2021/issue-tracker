import { Button, Divider } from '@material-ui/core';
import { ReactComponent as LabelIconSvg } from 'icons/label.svg';
import { ReactComponent as MilestoneIconSvg } from 'icons/openMilestone.svg';
import CreateButton from 'components/buttons/CreateButton';
import styled from 'styled-components';

const NavbarButtons = ({ buttonType }: { buttonType: string }) => {
  return (
    <StyledNavbarButtons>
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
      <CreateButton>{buttonType}</CreateButton>
    </StyledNavbarButtons>
  );
};

export default NavbarButtons;

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
