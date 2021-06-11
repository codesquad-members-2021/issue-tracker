import styled from 'styled-components';

type ListWrapperType = {
  wrapWidth: string;
}

export const ListWrapper = styled.div<ListWrapperType>`
  width:${({ wrapWidth }) => wrapWidth ? wrapWidth : ''};
  border:1px solid #d9dbe9;
  border-radius: 11px;
  background: #FEFEFE;
  box-shadow:0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  > div{
    padding: 16px 32px;
  }
  > div:first-child{
    background:#F7F7FC;
    border-radius: 11px 11px 0 0;
  }
  > div::last-child{
    border-radius: 0 0 11px 11px;
  }
  > div + div{
    border-top: 1px solid #d9dbe9;
  }
`;

