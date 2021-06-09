import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PlusIcon from '@/Icons/Plus.svg';
import CloseIcon from '@/Icons/Close.svg';
import AlertCircleIcon from '@/Icons/AlertCircle.svg';
import CloseBoxIcon from '@/Icons/CloseBox.svg';
import ClipIcon from '@/Icons/Clip.svg';
import EditIcon from '@/Icons/Edit.svg';

const iconKinds: Record<string, any> = {
  plus: PlusIcon,
  close: CloseIcon,
  alertCircle: AlertCircleIcon,
  closeBox: CloseBoxIcon,
  clip: ClipIcon,
  edit: EditIcon
}

const IconButton = ({ icon, children, ...props }: { icon?: string, children: React.ReactNode }) => {
  return (
    <Button {...props}>
      <ImageTag src={icon ? iconKinds[icon] : ''} />
      {children}
    </Button>
  )
}

const ImageTag = styled.img`
  margin-right: 1rem;
`;

export default IconButton;
