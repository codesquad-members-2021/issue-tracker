import styled from "styled-components";
import LabelBadge from "components/common/LabelBadge";
const Label = ({}) => {
	//리코일(선택된 라벨)
	return (
		<ContentsContainer>
			<LabelBadge
				text={"label.name"}
				fontColor={"white"}
				backgroundColor={"black"}
			/>
		</ContentsContainer>
	);
};

const ContentsContainer = styled.div`
	display: flex;
	padding: 9px 0;
`;

export default Label;
