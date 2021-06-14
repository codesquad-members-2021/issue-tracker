import React, { FC } from 'react';
import { Text as S } from '../../styles/CommonStyles';

interface TextGroupProps {
  type: string;
  content: string;
  color: string;
}

const TextGroup: FC<TextGroupProps> = ({
  type,
  content,
  color,
}: TextGroupProps) => {
  return {
    large: <TextLarge {...{ content, color }} />,
    medium: <TextMedium {...{ content, color }} />,
    small: <TextSmall {...{ content, color }} />,
    xSmall: <TextXSmall {...{ content, color }} />,
  }[type] as JSX.Element;
};

export default TextGroup;

interface TextType {
  content: string;
  color: string;
}

const TextLarge = ({ content, color }: TextType) => {
  return <S.TextLarge {...{ color }}>{content}</S.TextLarge>;
};
const TextMedium = ({ content, color }: TextType) => {
  return <S.TextMedium {...{ color }}>{content}</S.TextMedium>;
};
const TextSmall = ({ content, color }: TextType) => {
  return <S.TextSmall {...{ color }}>{content}</S.TextSmall>;
};
const TextXSmall = ({ content, color }: TextType) => {
  return <S.TextXSmall {...{ color }}>{content}</S.TextXSmall>;
};
