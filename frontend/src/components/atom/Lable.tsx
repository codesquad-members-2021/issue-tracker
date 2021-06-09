import styled from 'styled-components'
import { Badge } from "@chakra-ui/react"
interface LableProps{
  color: string;
  desc?: string;
}
function Lable({color, desc}:LableProps){
  return (
    <LableBlock color={color}>{desc}</LableBlock>
  )
}

const LableBlock = styled.div<LableProps>`
margin-left: 10px;
padding: 0 5px;
height: 25px;
width: auto;
max-width:100px;
text-align: center;
border-radius:30px;
background-color: ${props => props.color};
color: ${({theme})=>theme.color.white};`

export default Lable