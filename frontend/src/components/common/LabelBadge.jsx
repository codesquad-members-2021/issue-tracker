import styled from "styled-components";

const LabelBadge = ({ text, fontColor, backgroundColor }) => {
	return (
		<LabelBadgeLayout fontColor={fontColor} backgroundColor={backgroundColor}>
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
	background: ${props => props.backgroundColor};
	color: ${props => props.fontColor};
`;

export default LabelBadge;
