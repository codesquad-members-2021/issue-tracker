import styled from "styled-components";
import LabelBadge from "components/common/LabelBadge";
const Label = ({}) => {
	return (
		<ContentsContainer>
			{/* <LabelBadge
				text={name}
				fontColor={textColor}
				backgroundColor={backgroundColor}
			/> */}
		</ContentsContainer>
	);
};

const ContentsContainer = styled.div`
	display: flex;
	padding: 9px 0;
`;

export default Label;
