import React from 'react'
import styled from 'styled-components';
import LabelItem from './LabelItem';
import LabelEditItem from './LabelEditItem';
import { LabelSwitchType } from '@components/common/types/LabelType';
import useToggle from '@/utils/hook/useToggle';

const LabelSwitching = ({ name, color, description }: LabelSwitchType) => {
  const [isEdit, setToggleItem] = useToggle(true);
  
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
