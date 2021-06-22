import { css } from 'styled-components';

export const cssImageAuto = css`
  img {
    /* 이미지 크기 보정 */
    max-width: 100%;
    height: auto;
  }
`;

export const cssDefault = css`
  background-color: transparent;
  background-repeat: no-repeat;
  overflow: hidden;
  outline: none;
  border: none;
`;
