import React, { ChangeEvent, ReactElement, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

interface Props {}

export default function SearchInput({}: Props): ReactElement {
  const [inputState, setInputState] = useState('is:issue is:open');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };
  return (
    <SearchInputBlock>
      <SearchIcon />
      <Input value={inputState} onChange={handleChange}></Input>
    </SearchInputBlock>
  );
}

const SearchInputBlock = styled.div`
  padding: 0px 10px;
  display: flex;
  min-width: 372px;
  width: fit-content;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.inputBg};
  border-radius: 0px 11px 11px 0px;
`;

const Input = styled.input`
  min-width: 300px;
  width: 450px;
  height: 40px;
  border: none;
  background-color: ${({ theme }) => theme.color.transparent};
  &:focus {
    outline: none;
  }
`;
