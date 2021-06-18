import styled from "styled-components";

const LabelBadge = ({ text, fontColor, bgColor }) => {
	return (
		<LabelBadgeLayout fontColor={fontColor} bgColor={bgColor}>
			{text}
		</LabelBadgeLayout>
	);
};

const LabelBadgeLayout = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${({ theme }) => theme.buttonHeights.small};
	padding: 0px 16px;
	border-radius: 30px;
	background: ${props => props.bgColor};
	color: ${props => props.fontColor};
`;

export default LabelBadge;
