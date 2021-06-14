import styled from 'styled-components';

const Theme = {
  color: {
    white: '#ffffff',
    bg: '#f6f8fa',
    inputBg: '#EFF0F6',
    fontGrey: '#6E7191',
    fontBlack: '#14142B',
    bgGrey: '#F7F7FC',
    lineGrey: '#e2e5e9',
    skyblue: '#007AFF',
    blue: '#007AFF',
    transparent: '#00ffff00',
    primary: '#3f51b5',
  },
  size: {
    sm: 12,
    lg: 32,
  },
  weight: {
    bold: 700,
  },
  filterModalPosition: {
    assignee: 260.5,
    label: 181.5,
    milestone: 90.5,
    author: 11,
  },
};

export const hoverGrey = styled.div`
  &:hover {
    background-color: ${Theme.color.bgGrey};
  }
`;

export default Theme;
