import React from 'react'
import styled from 'styled-components';

const HeadContent = () => {
  return (
      <HeadContentWrapper>
        새로운 이슈작성
      </HeadContentWrapper>
  )
}

const HeadContentWrapper = styled.div`
  margin-bottom:32px;
  font-size: 32px;
  line-height: 48px;
`;

export default HeadContent;
