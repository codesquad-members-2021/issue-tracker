import React from 'react'
import styled from 'styled-components';
import LabelItem from './LabelItem';
import LabelEditItem from './LabelEditItem';
import useToggle from '@/utils/hook/useToggle';
import { LabelSwitchType } from '../common/types/LabelType';

const LabelSwitching = ({ name, color, description }: LabelSwitchType) => {
  const [isEdit, setToggleItem] = useToggle(false);

  return (
    <div>
      <ListItem>
        {isEdit
          ? <LabelItem {...{ name, color, description, setToggleItem }} />
          : <LabelEditItem {...{ name, color, description, setToggleItem }} />
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
