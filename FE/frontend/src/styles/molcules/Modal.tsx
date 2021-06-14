import React, { useState } from 'react';
import styled from 'styled-components';
import Typo from '../atoms/Typos';
import { ReactComponent as Downward } from '../../icons/downward.svg';
import DropDown from './DropDown';

interface Props {
  label: string;
  options: string[];
  exceptedDiv: string;
  type: string;
  innerTitle: string;
}

const Modal = (props: Props) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [options, setOptions] = useState(
    props.options.map(val => {
      return { name: val, isSelected: false };
    })
  );

  const toggle = () => {
    setIsShown(!isShown);
  };

  return (
    <Div>
      <Button onClick={toggle}>
        <Text link sm>
          {props.label}
        </Text>
        <Downward />
      </Button>
      {isShown && (
        <DropDownWrapper>
          <DropDown
            isShown={isShown}
            toggle={toggle}
            exceptedDiv={props.exceptedDiv}
            options={options}
            setOptions={setOptions}
            type={props.type}
            title={props.innerTitle}
          />
        </DropDownWrapper>
      )}
    </Div>
  );
};

const Div = styled.div`
  position: relative;
`;

const Text = styled(Typo)`
  color: ${props => props.theme.greyscale.label};
  svg {
    margin: 2px 6px 0 6px;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 128px;
  background: ${props => props.theme.greyscale.background};
  border-radius: 11px 0px 0px 11px;
  cursor: pointer;
  //not working
  &:hover span {
    color: ${props => props.theme.greyscale.offWhite};
  }
`;

const DropDownWrapper = styled.div`
  position: absolute;
  top: 40px;
`;

export default Modal;
