import React, { FC } from 'react';
import { Text as S } from '../styles/CommonStyles';

interface TextGroupProps {
  type: string;
  content: string;
}

const TextGroup: FC<TextGroupProps> = ({ type, content }: TextGroupProps) => {
  return {
    large: <TextLarge {...{ content }} />,
    medium: <TextMedium {...{ content }} />,
    small: <TextSmall {...{ content }} />,
    xSmall: <TextXSmall {...{ content }} />,
  }[type] as JSX.Element;
};

export default TextGroup;

const TextLarge = ({ content }: { content: string }): JSX.Element => {
  return <S.TextLarge>{content}</S.TextLarge>;
};
const TextMedium = ({ content }: { content: string }): JSX.Element => {
  return <S.TextMedium>{content}</S.TextMedium>;
};
const TextSmall = ({ content }: { content: string }): JSX.Element => {
  return <S.TextSmall>{content}</S.TextSmall>;
};
const TextXSmall = ({ content }: { content: string }): JSX.Element => {
  return <S.TextXSmall>{content}</S.TextXSmall>;
};
