import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

type ListWrapperType = {
  wrapWidth: string;
}

export const ListWrapper = styled.div<ListWrapperType>`
  width:${({ wrapWidth }) => wrapWidth ? wrapWidth : ''};
  min-width: 595px;
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

export const inputStyles = makeStyles({
  title: {
    width: '100%',
    marginBottom: '16px',
    border: '1px solid #fff',
    '& input': {
      background: '#EFF0F6',
      '&:focus': {
        background: '#FEFEFE',
        boxShadow: '0 0 0 1px #14142B',
        borderRadius: '4px'
      }
    }
  },
  desc: {
    width: '100%',
    border: 'none',
    padding: '0',
    '& >div': {
      background: '#EFF0F6',
    },
    '& textarea': {
      '&:focus': {
        background: '#FEFEFE',
        boxShadow: '0 0 0 1px #14142B',
        borderRadius: '4px'
      }
    }
  },
  fileButton: {
    width: '100%',
    padding: '16px',
    background: '#EFF0F6',
    borderTop: '1px dashed #c4c4c4',
    justifyContent: 'start',
    fontWeight: 700,
    color: '#6E7191',
    fontSize: '12px'
  },
  displayNone: {
    display: 'none'
  },
  button: {
    padding: '12px 84px',
    marginLeft: '16px',
    background: "#007AFF",
    borderRadius: '20px',
    fontSize: '18px',
  }
})