import styled from 'styled-components'
import LabelBadge from 'components/atom/LabelBadge'
import { ReactComponent as DeleteIcon} from 'assets/icon/DeleteIcon.svg';
import { ReactComponent as EditIcon} from 'assets/icon/EditIcon.svg';
export default function LabelItem(){

  const colorData = {
    backgroundColorCode: 'red',
    textColorCode:'white'
  }

  return (
    <LabelItemBlock>
      <div className='label__list__badge'>
        <LabelBadge color={colorData} desc={'레이블'}/>
      </div>
      <div className='label__list__description'>레이블에 대한 설명</div>
      <div className='label__list__edit'>
        <div><EditIcon/>&nbsp;편집</div>
        <div className='delete'><DeleteIcon/>&nbsp;삭제</div>
      </div>
    </LabelItemBlock>
  )
}


const LabelItemBlock = styled.div`
display: grid;
grid-template-columns: 20% 60% 20%;
align-items: center;
border-top: 1px solid ${({ theme }) => theme.color.lineGrey};
padding: 36px;
.label__list__description{
  display: flex;
  padding-top: 5px;
  color: ${({theme})=>theme.color.fontGrey};
}
.label__list__edit{
  display: flex; 
  font-size: ${({ theme }) => theme.size.sm}px;
  justify-content: flex-end;
  div{
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
}
.delete{
  color: ${({theme})=>theme.color.red};
}
`

