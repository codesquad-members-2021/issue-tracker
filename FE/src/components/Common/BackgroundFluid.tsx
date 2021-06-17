// 사용안함. Body를 대체하여 Modal 컨트롤하는 이벤트를 걸려했는데
  // 다 수정하려면 지금 (2021.06.16) 구조상 너무 복잡해짐
import styled from 'styled-components';
import { TChildren } from '../../util/types';

interface IBackgroundFluid {
  children?: TChildren;
  onClick?: (e: Event | React.MouseEvent) => void;
}

const BackgroundFluid = ({ children, onClick, ...props }: IBackgroundFluid) => {
  return (
    <BackgroundFluidLayout {...props} onClick={onClick}>
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
