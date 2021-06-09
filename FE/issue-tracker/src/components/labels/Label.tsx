import styled from 'styled-components';

interface Props {
  name: string;
  colorCode: string;
  fontLight: boolean;
}

function Label({ name, colorCode, fontLight }: Props) {
  return (
    <LabelTag colorCode={colorCode} fontLight={fontLight}>
      {name}
    </LabelTag>
  );
}

export default Label;

interface LabelTagType {
  colorCode: string;
  fontLight: boolean;
}

const LabelTag = styled.span<LabelTagType>`
  padding: 4px 16px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border-radius: 30px;
  cursor: pointer;
  background-color: ${({ colorCode }) => colorCode};
  color: ${({ fontLight, theme }) =>
    fontLight ? theme.colors.gr_offWhite : theme.colors.gr_titleActive};
`;
