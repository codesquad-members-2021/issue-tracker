
interface MilesProps{
  sizeType?: number
}
function MilesStone({sizeType=12}:MilesProps){
  const style = {
    display: 'flex',
    width: 'fit-content',
    margin: '0 7px'
  }
  return (
    <div style={style}>
      <img src={process.env.PUBLIC_URL+'/miles.png'} alt='milesStone' width={sizeType}/>
    </div>
  )
}

export default MilesStone
