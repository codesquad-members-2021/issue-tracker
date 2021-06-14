import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface IlabelTitle {
  color: string;
  bg_color: string;
}

const LabelListPage = () => {
  const data = {
    "label": [
      {
        "id": 1,
        "title": "feature",
        "description": "기능에 대한 레이블",
        "color": "#fff",
        "bg-color": "blue"
      },
      {
        "id": 2,
        "title": "bug",
        "description": "버그에 대한 레이블",
        "color": "#ff4545",
        "bg-color": "#333"
      }
    ]
  };


  const labels = data.label.map(label => 
    <StyleLabelItem>
      <StyleLabelTitle color={label.color} bg_color={label['bg-color']}>{label.title}</StyleLabelTitle>
      <StyleLabelDescription>{label.description}</StyleLabelDescription>
      <StyleLabelButtons>
        <StyleLabelEditButton><FaEdit/>편집</StyleLabelEditButton>
        <StlyeLabelDeleteButton><FaTrashAlt/>삭제</StlyeLabelDeleteButton>
      </StyleLabelButtons>
    </StyleLabelItem>
  );
  return (
    <StyleLabelList>
      <li>3개의 레이블</li>
      {labels}
    </StyleLabelList>
  )
}

const StyleLabelList = styled.ul`
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  li:first-child {
    padding: 1.125rem 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  }
`;

const StyleLabelItem = styled.li`
  display: grid;
  align-items: center;
  padding: 2.25rem 2rem;
  background-color: #FEFEFE;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.line};
  grid-template-columns: 1fr 5fr 1fr;
  &:last-child {
    border-bottom: none;
  }
`;

const StyleLabelTitle = styled.div<IlabelTitle>`
  padding: 0.25rem 1rem;
  border-radius: 1.875rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg_color};
  width: fit-content;
`;

const StyleLabelDescription = styled.div`
  color: ${({ theme }) => theme.colors.grayScale.label};
  font-size: 1rem;
`;

const StyleLabelButtons = styled.div`
  text-align: right;
`;

const StyleLabelEditButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  svg {
    vertical-align: top;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
`;

const StlyeLabelDeleteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.normal.red};
  svg {
    vertical-align: top;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
`;

export default LabelListPage;
