import { Wrapper, Upper, Lower } from 'components/common/Table';
import styled from 'styled-components';
import LabelsItem from './LabelsItem';

const Labels = () => {
  return (
    <Wrapper>
      <Upper>
        <LabelsHeader>3개의 레이블</LabelsHeader>
      </Upper>
      <Lower>

        <LabelsItem id={1} description="레이블에 대한 설명" title="레이블이름" textColor='white' colorCode="#ff0000" />
      </Lower>
    </Wrapper>
  );
};

export default Labels;

const LabelsHeader = styled.div`
  padding: 1.3rem 1.6rem;
`;
