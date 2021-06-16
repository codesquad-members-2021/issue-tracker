import React from 'react';
import styled from 'styled-components';

interface childrenType {
  children: string;
  className: string;
}
export default function Title({ children, className }: childrenType) {
  return <TitleBlock className={className}>{children}</TitleBlock>;
}

const TitleBlock = styled.div`
  font-size: ${({ theme }) => theme.size.lg}px;
  font-weight: ${({ theme }) => theme.weight.bold};
`;
