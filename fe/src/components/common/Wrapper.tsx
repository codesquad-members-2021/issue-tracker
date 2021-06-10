import styled, { css } from 'styled-components';
import { UpperWrapper, LowerdWrapper, ColumDiv } from 'style/commonStyle';
const Wrapper = () => {
  return (
    <Div>
      <UpperWrapper> sdfi</UpperWrapper>
      <LowerdWrapper></LowerdWrapper>
    </Div>
  );
};

export default Wrapper;

const Div = styled.div`
  ${ColumDiv}
`;
