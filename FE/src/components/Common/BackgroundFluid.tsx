import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalTypes, searchModalVisible } from '../../util/recoil';
import { TChildren } from '../../util/types';

interface IBackgroundFluid {
  children?: TChildren;
}

const BackgroundFluid = ({ children, ...props }: IBackgroundFluid) => {
  const [arrModalTypes] = useRecoilState(modalTypes);
  const [isSearchModalVisible, setSearchModalVisible] =
    useRecoilState(searchModalVisible);

  const handleBackgroundClick = (e: React.MouseEvent | Event) => {
    const target = e.target as HTMLElement;
    const closestTarget: HTMLElement | null = target.closest('#modal');
    // closestTarget에 해당이 안된다..? ==> modal이 아니다.
    // modal이 아니라면 모달 체크 후 모달을 꺼야한다.

    if (closestTarget) {
      const currModalType = closestTarget.dataset.modalType;
      const isModal = arrModalTypes.some((modalType) => currModalType === modalType);
      if (isModal) return;
    }

    isSearchModalVisible && setSearchModalVisible(false);
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
