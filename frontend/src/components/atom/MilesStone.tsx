
interface MilesProps{
  sizeType: number
}
function MilesStone({sizeType}:MilesProps){
  const style = {
    marginLeft: '10px'
  }
  return (
    <div style={style}>
      <img src={process.env.PUBLIC_URL+'/miles.png'} alt='milesStone' width={sizeType}/>
    </div>
  )
}

export default MilesStone
