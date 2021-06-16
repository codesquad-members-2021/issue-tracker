import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { atoms } from '../../util/store';
import { TChildren } from '../../util/types';

interface IBackgroundFluid {
  children?: TChildren;
}

const BackgroundFluid = ({ children, ...props }: IBackgroundFluid) => {
  const {
    issueList: {
      searchModalVisible,
      assigneeModalVisible, labelModalVisible,
      milestoneModalVisible, writerModalVisible,
    }
  } = atoms;

  const [isSearchModalVisible, setSearchModalVisible] = useRecoilState(searchModalVisible);
  const [isAssigneeModalVisible, setIsAssigneeModalVisible] = useRecoilState(assigneeModalVisible);
  const [isLabelModalVisible, setIsLabelModalVisible] = useRecoilState(labelModalVisible);
  const [isMilestoneModalVisible, setIsMilestoneModalVisible] = useRecoilState(milestoneModalVisible);
  const [isWriterModalVisible, setIsWriterModalVisible] = useRecoilState(writerModalVisible);

  const handleBackgroundClick = (e: React.MouseEvent | Event) => {
    const target = e.target as HTMLElement;
    const closestTarget: HTMLElement | null = target.closest('#modal');

    if (closestTarget && closestTarget.contains(target)) return;

    isSearchModalVisible && setSearchModalVisible(false);
    isAssigneeModalVisible && setIsAssigneeModalVisible(false);
    isLabelModalVisible && setIsLabelModalVisible(false);
    isMilestoneModalVisible && setIsMilestoneModalVisible(false);
    isWriterModalVisible && setIsWriterModalVisible(false);
  };

  return (
    <BackgroundFluidLayout {...props} onClick={handleBackgroundClick}>
      {children}
    </BackgroundFluidLayout>
  );
};

export default BackgroundFluid;

// --- Styled Components ---
const BackgroundFluidLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
