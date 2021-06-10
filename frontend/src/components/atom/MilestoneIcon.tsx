import styled from 'styled-components';

interface MilestoneIconProps {
  sizeType?: number;
}
function MilestoneIcon({ sizeType = 12 }: MilestoneIconProps) {
  return (
    <MilestoneIconBlock>
      <img src={process.env.PUBLIC_URL + '/miles.png'} alt='milestoneIcon' width={sizeType} />
    </MilestoneIconBlock>
  );
}

export default MilestoneIcon;

const MilestoneIconBlock = styled.div`
  display: 'flex';
  width: 'fit-content';
  margin: '0 7px';
`;
