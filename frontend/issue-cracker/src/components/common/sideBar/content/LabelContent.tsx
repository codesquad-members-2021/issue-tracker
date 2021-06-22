import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import LabelSmallGroup from '../../group/LabelSmallGroup';

interface LabelContentProps {
  labelList: {
    id: number;
    title: string;
    background_color_hexa: string;
    text_color_hexa: string;
  }[];
}
const LabelContent = ({ labelList }: LabelContentProps): JSX.Element => {
  return (
    <>
      {labelList?.map((label) => (
        <LabelSmallGroup
          key={uuidv4()}
          color={label.text_color_hexa}
          backgroundColor={label.background_color_hexa}
          label={label.title}
        />
      ))}
    </>
  );
};

export default LabelContent;
