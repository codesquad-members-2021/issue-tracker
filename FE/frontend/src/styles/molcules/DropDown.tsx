import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import Typo from '../atoms/Typos';
import { ReactComponent as CheckOffCircle } from '../../icons/checkOffCircle.svg';
import { ReactComponent as CheckOnCircle } from '../../icons/checkOnCircle.svg';

interface Props {
  toggle: () => void;
  exceptedDiv: string;
  options: {
    image?: string;
    color?: string;
    name: string;
    isSelected: boolean;
  }[];
  setChecked: (option: { name: string; isSelected: boolean }) => void;
  type: string;
  title: string;
}

const DropDown = (props: Props): JSX.Element => {
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
                props.setChecked(option);
                onClickOutside(event);
              }}>
              {props.type === 'image' && (
                <OptionImage imageURL={option.image} color={option.color} />
              )}
              <p>{option.name}</p>
              {
                <CheckBoxWrapper>
                  {!option.isSelected && <CheckOffCircle />}
                  {option.isSelected && <CheckOnCircle />}
                </CheckBoxWrapper>
              }
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
    padding: 0 8px;
    &:not(:last-child) {
      border-bottom: ${props => `1px solid ${props.theme.greyscale.line}`};
    }
    &:last-child {
      border-radius: 0px 0px 16px 16px;
    }
  }
`;

const FilterTitle = styled.div`
  padding-left: 20px;
  height: 48px;
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.greyscale.titleActive};

  background: ${props => props.theme.greyscale.background};
  border-radius: 16px 16px 0px 0px;
`;

const FilterOption = styled(Typo)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 44px;
  cursor: pointer;
  background: ${props => props.theme.greyscale.offWhite};
  & > div,
  p {
    padding: 0 10px;
  }
`;

const OptionImage = styled.div<{
  imageURL?: string | undefined;
  color?: string;
}>`
  width: 20px;
  height: 20px;
  border-radius: 11px;
  background-image: ${props => {
    if (props.imageURL) return `url(${props.imageURL})`;
  }};
  background-color: ${props => {
    if (props.color) return `${props.color}`;
  }};
  background-size: contain;
  border: ${props => `1px solid ${props.theme.greyscale.line}`};
  box-sizing: border-box;
`;

const CheckBoxWrapper = styled.div`
  position: absolute;
  right: 0px;
`;

export default DropDown;
