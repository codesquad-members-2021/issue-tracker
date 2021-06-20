import LabelMilestoneTab from 'components/common/LabelMilestoneTab'
import PrimaryButton from 'components/atom/PrimaryButton'
import styled from 'styled-components'
import { lableClick , milestoneClick } from 'store/issueInfoStore'
import { useSetRecoilState } from 'recoil'
import LabelItem from 'page/labelPage/LabelItem'

export default function LabelPage(){
  const setLableState = useSetRecoilState(lableClick)
  const setMilestoneState = useSetRecoilState(milestoneClick)
  setLableState(true)
  setMilestoneState(false)

  return (
    <LabelBlock>
      <div className='tab__option__header'><LabelMilestoneTab/><PrimaryButton value={'+ 추가'}/></div>
      <div className='tab__table'>
        <div className='tab__table__header'>         
          <div>&nbsp;&nbsp;3개의 레이블</div>
        </div>
        <LabelItem/>
      </div>
    </LabelBlock>
  )
}

const LabelBlock = styled.div`
padding: 50px 80px;
.tab__option__header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px; 
}
.tab__table{
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.lineGrey};
}
.tab__table__header{
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.bgGrey};
  border-radius: 16px 16px 0 0;
  font-weight: ${({theme})=>theme.weight.bold};
  color: ${({theme})=>theme.color.fontGrey};
}
`;

