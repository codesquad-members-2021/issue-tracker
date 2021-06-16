import React from 'react'
import styled from 'styled-components';
import LabelItem from './LabelItem';
import LabelEditItem from './LabelEditItem';
import { LabelSwitchType } from '@components/common/types/LabelType';
import useToggle from '@/utils/hook/useToggle';

const LabelSwitching = ({ name, color, description }: LabelSwitchType) => {
  const [isEditLabel, setToggleLabel] = useToggle(false);

  return (
    <div>
      <ListItem>
        {isEditLabel
          ? <LabelEditItem {...{ name, color, description, setToggleLabel }} />
          : <LabelItem {...{ name, color, description, setToggleLabel }} />
        }
      </ListItem>
    </div>
  )
}

const ListItem = styled.div`
  display:flex;
  width:100%;
  padding: 20px 0;
`;
export default LabelSwitching;
