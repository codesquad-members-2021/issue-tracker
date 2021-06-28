import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import DropDown from './DropDown';
import { filterAtom } from '../../recoil/atoms';

interface Props {
  children: JSX.Element;
  options: any[];
  exceptedDiv: string;
  type: string;
  innerTitle: string;
}

const Modal = (props: Props) => {
  const [filter, setFilter] = useRecoilState<any>(filterAtom);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [options, setOptions] = useState(
    props.options.map(val => {
      return {
        id: val.id,
        name: val.optionName,
        image: val.image,
        color: val.color,
        isSelected: false,
      };
    })
  );

  useEffect(() => {
    switch (props.innerTitle) {
      case '작성자 필터':
        options.forEach((option: any) => {
          if (option.isSelected === true) {
            option.name === '작성자가 없는 이슈'
              ? setFilter({ ...filter, writer: null })
              : setFilter({ ...filter, writer: option.id });
          }
        });
        if (
          options.filter((option: any) => option.isSelected === true).length ===
          0
        ) {
          setFilter({ ...filter, writer: '' });
        }
        return;
      case '담당자 필터':
        options.forEach((option: any) => {
          if (option.isSelected === true) {
            option.name === '담당자가 없는 이슈'
              ? setFilter({ ...filter, assignee: null })
              : setFilter({ ...filter, assignee: option.id });
          }
        });
        if (
          options.filter((option: any) => option.isSelected === true).length ===
          0
        ) {
          setFilter({ ...filter, assignee: '' });
        }
        return;
      case '레이블 필터':
        options.forEach((option: any) => {
          if (option.isSelected === true) {
            option.name === '레이블이 없는 이슈'
              ? setFilter({ ...filter, label: null })
              : setFilter({ ...filter, label: option.id });
          }
        });
        if (
          options.filter((option: any) => option.isSelected === true).length ===
          0
        ) {
          setFilter({ ...filter, label: '' });
        }
        return;
      case '마일스톤 필터':
        options.forEach((option: any) => {
          if (option.isSelected === true) {
            option.name === '마일스톤이 없는 이슈'
              ? setFilter({ ...filter, milstone: null })
              : setFilter({ ...filter, milstone: option.id });
          }
        });
        if (
          options.filter((option: any) => option.isSelected === true).length ===
          0
        ) {
          setFilter({ ...filter, milstone: '' });
        }
        return;
      case '이슈 필터':
        options.forEach((option: any) => {
          if (option.isSelected === true) {
            switch (option.name) {
              case '열린 이슈':
                return setFilter({ ...filter, isOpen: true });
              case '내가 작성한 이슈':
                return setFilter({
                  ...filter,
                  isOpen: '',
                  specialFilter: 'my_issue',
                });
              case '나에게 할당된 이슈':
                return setFilter({ ...filter, specialFilter: 'my_assign' });
              case '내가 댓글을 남긴 이슈':
                return setFilter({ ...filter, specialFilter: 'my_comment' });
              case '닫힌 이슈':
                return setFilter({ ...filter, isOpen: false });
            }
          }
          if (
            options.filter((option: any) => option.isSelected === true)
              .length === 0
          ) {
            setFilter({ ...filter, specialFilter: '' });
          }
        });
    }
  }, [options]);

  const toggle = (): void => {
    setIsShown(!isShown);
  };

  const setChecked = (option: { name: string; isSelected: boolean }): void => {
    setOptions(
      options.map(item =>
        item.name === option.name
          ? { ...item, isSelected: !option.isSelected }
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

const Button = styled.div<{ isShown?: boolean }>`
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
