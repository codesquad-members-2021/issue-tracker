import { useState } from 'react';
import styled from 'styled-components';
import { LabelItemType } from 'types/issueType';
import LabelsItemLeft from './LabelsItemLeft';
import LabelsItemRight from './LabelsItemRight';
import { MouseEvent } from 'react';
import LabelsItemEdit from './LabelsItemEdit';

const LabelsItem = ({
  id,
  description,
  title,
  textColor,
  labelColor,
}: LabelItemType) => {
  const [popup, setPopup] = useState(false);

  const clickHandler = (e: MouseEvent) => {
    setPopup(!popup);
  };
  return (
    <>
      <StyledLabelsItem>
        <LabelsItemLeft
          {...{ id, description, title, labelColor, textColor }}
        />
        <LabelsItemRight {...{ id, clickHandler }} />
      </StyledLabelsItem>
      {popup && (
        <LabelsItemEdit
          {...{ clickHandler, id, description, title, labelColor, textColor }}
        />
      )}
    </>
  );
};

export default LabelsItem;

const StyledLabelsItem = styled.li`
  ${({ theme }) => theme.style.flexSpaceBetween}
  padding: 2.25rem 2rem;
  box-sizing: border-box;
  border-top: 1px solid ${({ theme }) => theme.color.grayscale.line};
`;
