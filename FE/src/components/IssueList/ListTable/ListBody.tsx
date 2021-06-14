import styled from 'styled-components';
import { Checkbox } from '@material-ui/core';
import { IconAlertCircle, IconMileStone } from '../../Common/Icons';
import { FaHashtag } from 'react-icons/fa';
import Label from '../../Common/Label';

const ListBody = ({ ...props }) => {
  return (
    <ListBodyLayout {...props}>
      <ListBodyRow>
        {/* 좌측 */}
        <ListBodyBlock>
          <Checkbox color="primary" />
          <TitleInfoBlock>
            <TitleBlock>
              <span className="icon">
                <IconAlertCircle />
              </span>
              <span className="subject">이슈 제목</span>
              <Label>레이블 이름</Label>
            </TitleBlock>
            <InfoBlock>
              <span><FaHashtag/>이슈번호 </span>
              <span>작성자 및 타임스탬프 정보</span>
              <span><IconMileStone/>마일스톤</span>
            </InfoBlock>
          </TitleInfoBlock>
        </ListBodyBlock>

        {/* 우측 */}
        <ListBodyBlock>
          <AssigneeProfileBlock>
            <IconAlertCircle />
          </AssigneeProfileBlock>
        </ListBodyBlock>

      </ListBodyRow>

    </ListBodyLayout>
  );
};
export default ListBody;

// --- Styled Components ---
// 1. 메인 (큰 틀)
const ListBodyLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.grayScale.offWhite};
  border-radius: 0px 0px 0.5rem 0.5rem;
  width: inherit;
`;

const ListBodyRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  padding: 1.05rem 0;
  :last-child {
    border-bottom: none;
  }
`;

const ListBodyBlock = styled.div`
  display: flex;
  column-gap: 0.8rem;
`;
// =====

// 2. 일반
const TitleInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;

const TitleBlock = styled.div`
  display: flex;
  column-gap: 0.6rem;
  align-items: center;

  span {
    &.icon {
      color: ${({ theme }) => theme.colors.normal.blue};
    }
    &.subject {
      font-size: ${({ theme }) => theme.fontSize.M};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
`;

const InfoBlock = styled.div`
  display: flex;
  column-gap: 1.2rem;
  align-items: center;

  span {
    font-size: ${({ theme }) => theme.fontSize.XS};
    color: ${({ theme }) => theme.colors.grayScale.label};
    display: flex;
    align-items: center;
    column-gap: 0.4rem;

    svg {
      fill: currentColor;
      stroke: currentColor;
    }
  }
`;

const AssigneeProfileBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  margin-right: 3.2rem;
`;
