import styled, { css } from 'styled-components';

export const ColumDiv = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UpperWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grayscale.line};
  background-color: #f7f7fc;
  height: 2rem;
  border-radius: 16px 16px 0px 0px;
`;

export const LowerdWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grayscale.line};
  border-top: none;
  height: 2rem;
  background: #fefefe;
  border-radius: 0px 0px 16px 16px;
`;
