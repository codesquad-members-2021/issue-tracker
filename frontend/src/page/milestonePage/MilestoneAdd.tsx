import styled from 'styled-components'
import Title from 'components/atom/Title'
import PrimaryButton from 'components/atom/PrimaryButton'
export default function MilestoneAdd(){

  return (
    <MilestoneAddBlock>
      <Title className='milestone__add'>새로운 마일스톤 추가</Title>
      <div className='milestone__add__input'>
        <div>
          <input type='text' className='milestone__name' placeholder='마일스톤 이름'/>
          <input type='text' className='milestone__due-date' placeholder='완료일(선택) ex.YYYY-MM-DD'/>
        </div>
        <input type='text' className='milestone__due-date' placeholder='설명(선택)'/>
      </div>
      <div className='milestone__add__submit'>
        <PrimaryButton value={'+ 완료'}/>
      </div>
    </MilestoneAddBlock>
  )
}

const MilestoneAddBlock = styled.div`
margin: 24px 0;
padding: 32px;
border-radius: 16px;
border: 1px solid ${({ theme }) => theme.color.lineGrey};
.milestone__add__input{
  div{
  display: flex;
  margin-top: 32px ;
  }
  input{
    display: block;
    width: 50%;
    padding: 0 24px;
    margin-right: 16px;
    margin-bottom: 16px;
    border: none;
    background-color: ${({ theme }) => theme.color.inputBg};
    font-size: ${({ theme }) => theme.size.md}px;
    border-radius: 11px;
    height: 56px;
    &:focus {
    text-decoration: none;
    background-color: ${({ theme }) => theme.color.white};
    }
    &:last-child{
      margin: 0 0 24px 0;
      width: 100%;
    }
  }
}
.milestone__add__submit{
  display: flex;
  justify-content: flex-end;
}
}`