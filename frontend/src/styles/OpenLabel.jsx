import styled from "styled-components";
import { ReactComponent as Archive } from "images/archive.svg";
import { ReactComponent as Alert } from "images/alert-circle.svg";
import theme from "styles/theme";

const OpenLabel = ({ text, icon, strokeColor, bgColor }) => {
	const getIcon = () => {
		switch (icon) {
			case "alert": {
				return <Alert stroke={theme.colors[strokeColor]} />;
			}
			case "archive": {
				return <Archive stroke={theme.colors[strokeColor]} />;
			}
			case "none": {
				return <></>;
			}
			default: {
				console.error("unhandled icon Type🤦‍♀️");
			}
		}
	};
	return (
		<LabelWrapper _color={strokeColor} _bgColor={bgColor}>
			{getIcon()}
			<ButtonText _color={strokeColor}>{text}</ButtonText>
		</LabelWrapper>
	);
};

export default OpenLabel;

const LabelWrapper = styled.div`
	width: 100px;
	height: 40px;
	border-radius: ${({ theme }) => theme.border_radius.xxl};
	border: 1px solid ${props => props._color};
	background-color: ${props => props._bgColor};
`;

const ButtonText = styled.div`
	padding: 0 4%;
	color: ${props => props._color};
`;
