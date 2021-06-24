import React, { useState } from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';
import Typo from '../atoms/Typos';

interface Props {
  children: JSX.Element;
  options: any[];
  exceptedDiv: string;
  type: string;
  innerTitle: string;
}

const Modal = (props: Props) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [options, setOptions] = useState(
    props.options.map(val => {
      return {
        name: val.optionName,
        image: val.image,
        color: val.color,
        isSelected: false,
      };
    })
  );

  const toggle = (): void => {
    setIsShown(!isShown);
  };

  const setChecked = (option: { name: string; isSelected: boolean }): void => {
    setOptions(
      options.map(item =>
        item.name === option.name
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      )
    );
  };

  return (
    <Div>
      <Button onClick={toggle} isShown={isShown}>
        {props.children}
      </Button>

      {isShown && (
        <DropDownWrapper>
          <DropDown
            toggle={toggle}
            exceptedDiv={props.exceptedDiv}
            setChecked={setChecked}
            options={options}
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

const Button = styled.div<{ isShown?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 128px;
  background: ${props => props.theme.greyscale.background};
  border-radius: 11px 0px 0px 11px;
  pointer-events: ${props => (props.isShown ? 'none' : 'auto')};
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
