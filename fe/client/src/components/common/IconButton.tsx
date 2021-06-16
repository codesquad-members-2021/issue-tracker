import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import WhitePlusIcon from '@/Icons/WhitePlus.svg';
import PlusIcon from '@/Icons/Plus.svg';
import CloseIcon from '@/Icons/Close.svg';
import AlertCircleIcon from '@/Icons/AlertCircle.svg';
import CloseBoxIcon from '@/Icons/CloseBox.svg';
import ClipIcon from '@/Icons/Clip.svg';
import EditIcon from '@/Icons/Edit.svg';
import TrashIcon from '@/Icons/Trash.svg';
import MilestoneIcon from '@/Icons/Milestone.svg';

const iconKinds: Record<string, any> = {
  whitePlus: WhitePlusIcon,
  plus: PlusIcon,
  close: CloseIcon,
  alertCircle: AlertCircleIcon,
  closeBox: CloseBoxIcon,
  clip: ClipIcon,
  edit: EditIcon,
  trash: TrashIcon,
  milestone: MilestoneIcon,
}

type IconButtonType = {
  icon?: string;
  color?: any;
  variant?: any;
  background?: string;
  minwidth?: string;
  margin?: string;
  height?: string;
  children?: React.ReactNode;
  style?: any;
  [key: string]: any;
}

const IconButton = ({ icon, children, ...props }: IconButtonType) => {
  return (
    <StyledButton {...{ ...props }}>
      <ImageTag src={icon ? iconKinds[icon] : ''} />
      {children}
    </StyledButton>
  )
}

const ImageTag = styled.img`
  margin-right: 1rem;
`;

const StyledButton = styled(Button) <IconButtonType>`
  height: ${({ height }) => height ? height : '100%'};
  padding: 0 1rem;
  margin: ${({ margin }) => margin};
  min-width: ${({ minwidth }) => minwidth};
  background: ${({ background }) => background};
  border-radius: 11px;
`;

export default IconButton;
