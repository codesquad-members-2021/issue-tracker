import CustomizedProgressBars from 'components/atom/Progress'
import LabelMilestoneTab from 'components/common/LabelMilestoneTab'
import PrimaryButton from 'components/atom/PrimaryButton'
import styled from 'styled-components'
import { lableClick , milestoneClick } from 'store/issueInfoStore'
import { useSetRecoilState } from 'recoil'
export default function MilestonePage(){

  const setLableState = useSetRecoilState(lableClick)
  const setMilestoneState = useSetRecoilState(milestoneClick)
  setLableState(false)
  setMilestoneState(true)
  const style={ 
    width: 150
  }
  return (
    <MilestoneBlock>
      <div className='milestone__option__header'><LabelMilestoneTab/><PrimaryButton value={'+ 추가'}/></div>
      <div style={style}>
        <CustomizedProgressBars progress={50}></CustomizedProgressBars>
      </div>
    </MilestoneBlock>
  )
}

const MilestoneBlock = styled.div`
padding: 50px 80px;
.milestone__option__header{
  display: flex;
  justify-content: space-between;
}
`
