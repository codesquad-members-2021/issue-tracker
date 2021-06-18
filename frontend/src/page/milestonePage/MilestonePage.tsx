import CustomizedProgressBars from 'components/atom/Progress'

export default function MilestonePage(){

  const style={ 
    width: 150
  }
  return (
    <>
    <div>마일스톤페이지</div>
    <div style={style}>
      <CustomizedProgressBars progress={50}></CustomizedProgressBars>
    </div>
    </>
  )
}