import React, { FC } from 'react';
import { Text as S } from '../styles/CommonStyles';

interface CountGroupProps {
  count: number;
  color: string;
}

const CountGroup: FC<CountGroupProps> = ({ count, color }: CountGroupProps) => {
  return <S.TextSmall {...{ color }}>{`(${count})`}</S.TextSmall>;
};

export default CountGroup;
