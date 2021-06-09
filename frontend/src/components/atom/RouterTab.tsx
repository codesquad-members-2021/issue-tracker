import styled from 'styled-components'
import MilesStone from './MilesStone'
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { CountInfoStorage } from '../../hooks/store'
import { useRecoilValue } from 'recoil'

function RouterTab(){
  const {label, milestone} = useRecoilValue(CountInfoStorage)
  return ( 
    <TabBlock>
      <div><LoyaltyIcon fontSize='small'/>&nbsp;레이블 ({label})</div>
      <div><MilesStone sizeType={14}/>마일스톤 ({milestone})</div>
    </TabBlock>
  )
}

export default RouterTab

const TabBlock = styled.div`
display: flex;
border: 1px solid ${({theme})=>theme.color.lineGrey};
border-radius: 11px;
color: ${({theme})=>theme.color.fontGrey};
width: 320px;
height: 40px;
div {
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:last-child){
    border-right: 1px solid ${({theme})=>theme.color.lineGrey};
  }
}
`