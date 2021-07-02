import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => theme.style.flexColumn}
  box-sizing: border-box;
`;

export const Upper = styled.div`
  ${({ theme }) => theme.style.upperWrapper}
  width: 100%;
  box-sizing: border-box;
`;

export const Lower = styled.div`
  ${({ theme }) => theme.style.lowerWrapper}
  box-sizing: border-box;
`;
