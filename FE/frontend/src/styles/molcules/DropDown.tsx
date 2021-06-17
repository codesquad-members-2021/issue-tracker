import React, { useEffect, Fragment, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Typo from '../atoms/Typos';
import { ReactComponent as CheckOffCircle } from '../../icons/checkOffCircle.svg';
import { ReactComponent as CheckOnCircle } from '../../icons/checkOnCircle.svg';

interface Props {
  isShown: boolean;
  toggle: () => void;
  exceptedDiv: string;
  options: { image?: string; name: string; isSelected: boolean }[];
  setOptions: Dispatch<SetStateAction<any>>;
  type: string;
  title: string;
}

const DropDown = (props: Props): JSX.Element => {
  console.log(props.options);
  const setChecked = (
    option: { name: string; isSelected: boolean },
    options: { name: string; isSelected: boolean }[],
    setOptions: Dispatch<SetStateAction<any>>
  ) => {
    setOptions(
      options.map(item =>
        item.name === option.name
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      )
    );
  };

  const onClickOutside = (event: React.MouseEvent<any> | Event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains(props.exceptedDiv)) {
      return;
    }
    props.toggle();
  };

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);

    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  });

  return (
    <FilterWrapper>
      <FilterTitle className="filterTitle">{props.title}</FilterTitle>
      {props.options.map((option, i) => {
        return (
          <Fragment key={i}>
            <FilterOption
              sm
              onMouseDown={(event: React.MouseEvent<HTMLInputElement>) => {
                setChecked(option, props.options, props.setOptions);
                onClickOutside(event);
              }}>
              {option.name}
              {props.type === 'text' && (
                <CheckBoxWrapper>
                  {!option.isSelected && <CheckOffCircle />}
                  {option.isSelected && <CheckOnCircle />}
                </CheckBoxWrapper>
              )}
            </FilterOption>
          </Fragment>
        );
      })}
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  width: 240px;
  border-radius: 16px;
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  div {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    &:not(:last-child) {
      border-bottom: ${props => `1px solid ${props.theme.greyscale.line}`};
    }
    &:last-child {
      border-radius: 0px 0px 16px 16px;
    }
  }
`;

const FilterTitle = styled.div`
  height: 48px;
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.greyscale.titleActive};

  background: ${props => props.theme.greyscale.background};
  border-radius: 16px 16px 0px 0px;
`;

const FilterOption = styled(Typo)`
  position: relative;
  height: 44px;
  cursor: pointer;
  background: ${props => props.theme.greyscale.offWhite};
`;

const CheckBoxWrapper = styled.div`
  position: absolute;
  right: 0px;
`;

export default DropDown;
