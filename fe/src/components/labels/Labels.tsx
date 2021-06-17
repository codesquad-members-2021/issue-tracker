import { Wrapper, Upper, Lower } from 'components/common/Table';
import { useRecoilValue } from 'recoil';
import { labelQuery, totalCountOfLabels } from 'store';
import styled from 'styled-components';
import LabelsItem from './LabelsItem';

const Labels = () => {
  const labelCount = useRecoilValue(totalCountOfLabels);
  const labelList = useRecoilValue(labelQuery);

  return (
    <Wrapper>
      <Upper>
        <LabelsHeader>
          <span>{labelCount}개의 레이블</span>
        </LabelsHeader>
      </Upper>
      <Lower>
        {labelList.map((labelItem) => (
          <LabelsItem
            key={labelItem.id}
            id={labelItem.id}
            title={labelItem.title}
            description={labelItem.description}
            textColor={labelItem.textColor}
            colorCode={labelItem.labelColor}
          />
        ))}
      </Lower>
    </Wrapper>
  );
};

export default Labels;

const LabelsHeader = styled.div`
  padding: 1.125rem 2rem;

  span {
    font-weight: ${({ theme }) => theme.fontWeight.bold2};
    color: ${({ theme }) => theme.color.grayscale.label};
  }
`;
