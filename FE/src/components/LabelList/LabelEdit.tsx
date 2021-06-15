import styled from 'styled-components';
import { FaSyncAlt } from 'react-icons/fa';
import PrimaryButton from '../../components/Common/PrimaryButton';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

interface IlabelTitle {
  color: string;
  bg_color: string;
}

interface IinputContainer {
  fit: boolean;
}

export const LabelEdit = ({
  title = '',
  description = '',
  color = '#fff',
  bg_color = '#000000',
  headerText = ''
}) => {
  const [editState, setEditState] = useState({
    title,
    description,
    color,
    bg_color,
  });

  const handleBgColor = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    setEditState({
      ...editState,
      bg_color: target.value
    });
  }
  return (
    <StyleLabelEdit>
      <StyleEditHead>
        {headerText}
      </StyleEditHead>
      <StyleEditBody>
        <StyleLabelTitle color={editState.color} bg_color={editState.bg_color}>{title} 안녕하세요</StyleLabelTitle>
        <StyleLabelInputs>
          <StyleLabelInput fit={false}>
            <div>
              <input type="text" placeholder='레이블 이름' value={editState.title}/>
            </div>
          </StyleLabelInput>
          <StyleLabelInput fit={false}>
            <div>
              <input type="text" placeholder='설명(선택)' value={editState.description}/>
            </div>
          </StyleLabelInput>
          <StyleLabelInput fit={true}>
            <div>
              <span>배경 색상</span>
              <input type="text" value={editState.bg_color} onChange={(e) => handleBgColor(e)}/>
              <button><FaSyncAlt/></button>
            </div>
            <div>
              <span>텍스트 색상</span>
              <label>
                <input type="radio" name="color" value='#000'/>
                어두운 색
              </label>
              <label>
                <input type="radio" name="color" value='#fff'/>
                밝은 색
              </label>
            </div>
          </StyleLabelInput>
        </StyleLabelInputs>
      </StyleEditBody>
      <StyleEditButtonWrap>
        <AddButtonLayout btnStyle="small">
          <AddIcon />
          완료
        </AddButtonLayout>
      </StyleEditButtonWrap>
    </StyleLabelEdit>
  )
}

const StyleLabelEdit = styled.li`
  padding: 2rem;
  border: 1px solid #D9DBE9;
  border-radius: 1rem;
  background-color: #fff;
  position: relative;
`;

const StyleEditHead = styled.div`
  font-size: 1.5rem;
`;

const StyleEditBody = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr;
  & > *:first-child {
    justify-self: center;
  }
`;

const StyleLabelTitle = styled.div<IlabelTitle>`
  padding: 0.25rem 1rem;
  border-radius: 1.875rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg_color};
  width: fit-content;
`;

const StyleLabelInputs = styled.ul`
  input {
    width: 100%;
    border: none;
    font-size: 1rem;
    background-color: transparent;
    padding: 0.75rem 1.5rem;
    &::placeholder {
      color: #A0A3BD;
    }
  }
  `;
  
  const StyleLabelInput = styled.li<IinputContainer>`
  display: ${({ fit }) => fit ? 'flex' : 'block'};
  column-gap: 1rem;
  & > div {
    border-radius: 0.75rem;
    background-color: #EFF0F6;
    display: inline-block;
    width: ${({ fit }) => fit ? 'fit-content' : '100%'};
    margin-bottom: 1rem;
    ${({ fit }) => fit ? `
      display: flex;
      align-items: center;
      input {
        width: auto;
        max-width: 7rem;
        padding: 0 1rem;
      }
      padding: 0.75rem 1.5rem;
      label {
        margin: 0 1rem;
      }
    ` : ''}
    span {
      color: #A0A3BD;
      margin-right: 1rem;
    }
    button {
      border: 0;
      background-color: transparent;
      padding: 0 0.5rem;
      cursor: pointer;
    }
  }
`;

const StyleEditButtonWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const AddButtonLayout = styled(PrimaryButton)`
  height: 2.5rem;
`;
