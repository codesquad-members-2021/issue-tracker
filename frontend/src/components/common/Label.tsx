import styled from 'styled-components';

const Label = ({type, value}) => {
  const palette = {
    "DEFAULT": "#F7F7FC",
    "BLUE": "#004DE3"
  }
  
  return (<LabelLayout type={palette[type]}> {value} </LabelLayout>)
}

const LabelLayout = styled.div<any>`
  padding: 0 16px;
  font-size: 1rem;
  background: ${(props) => props.type};
  
  border: 1px solid ${(props) => props.type};
  border-radius: 30px;

  display: flex;
  align-items: center;
`

export default Label;