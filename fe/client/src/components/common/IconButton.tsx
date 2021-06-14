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

const iconKinds: Record<string, any> = {
  whitePlus: WhitePlusIcon,
  plus: PlusIcon,
  close: CloseIcon,
  alertCircle: AlertCircleIcon,
  closeBox: CloseBoxIcon,
  clip: ClipIcon,
  edit: EditIcon,
}

type IconButtonType = {
  icon?: string;
  color?: any;
  variant?: any;
  background?: string;
  children: React.ReactNode;
}

const IconButton = ({ icon, children, color, variant, background }: IconButtonType) => {
  return (
    <Button color={color} variant={variant}
      style={{ borderRadius: "11px", padding: '0 1rem', background: background }}>
      <ImageTag src={icon ? iconKinds[icon] : ''} />
      {children}
    </Button>
  )
}

const ImageTag = styled.img`
  margin-right: 1rem;
`;

export default IconButton;
