import { RefObject } from 'react'
import styled from 'styled-components'
interface ListProps{
  type : string|null
  modal: RefObject<HTMLDivElement>
}
function RadionBtn(){
  return (
    <div>
      <input type="radio"/>
    </div>
    )
}
function List({type, modal}:ListProps){

  return (
    <ListBlock ref={modal}>
      <ListHead>{type} 선택</ListHead>
      <ListBody><div>내용</div><RadionBtn/></ListBody>
      <ListBody><div>내용</div><RadionBtn/></ListBody>
    </ListBlock>
  )
}

export default List

const ListBlock = styled.div`
position: absolute;
top: 190px;
right: 171px;
width: 240px;
border: 1px solid ${({theme})=>theme.color.lineGrey};
border-radius: 16px;
  div:not(:last-child) {
    border-bottom: 1px solid ${({theme})=>theme.color.lineGrey};
  }
}`
const ListHead = styled.div`
padding: 10px;
background-color: ${({theme})=>theme.color.bgGrey};
border: ${({theme})=>theme.color.bgGrey};
border-bottom: 1px solid ${({theme})=>theme.color.lineGrey};
border-radius: 16px 16px 0 0;
}`
const ListBody = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
background-color: ${({theme})=>theme.color.white};
  &:last-child {
    border-radius: 0 0 16px 16px;
  }
}`
