import Button from "@material-ui/core/Button";
import { ReactComponent as XIcon } from "images/x-square.svg";
import { ReactComponent as EditIcon } from "images/edit.svg";
import { ReactComponent as PaperIcon } from "images/paperclip.svg";
import { ReactComponent as Archive } from "images/archive.svg";
import styled from "styled-components";
import theme from "styles/theme";

const WhiteButtons = ({ text, icon, size, clickHandler }) => {
	const getIcon = () => {
		switch (icon) {
			case "edit": {
				return <EditIcon stroke={theme.colors.blue} />;
			}
			case "cancel": {
				return <XIcon stroke={theme.colors.blue} />;
			}
			case "paper": {
				return <PaperIcon stroke={theme.colors.blue} />;
			}
			case "archive": {
				return <Archive stroke={theme.colors.blue} />;
			}
			case "none": {
				return <></>;
			}
			default: {
				console.error("unhandled icon Type🤦‍♀️");
			}
		}
	};

	const getWidth = () => {
		switch (size) {
			case "m": {
				return theme.buttonWidths.baseS;
			}
			case "l": {
				return theme.buttonWidths.lg;
			}
			default: {
				console.error("unhandled width Type🤦‍♀️");
			}
		}
	};

	return (
		<WhiteButton _width={getWidth()} onClick={clickHandler}>
			{getIcon()}
			<ButtonText>{text}</ButtonText>
		</WhiteButton>
	);
};

const WhiteButton = styled(Button)`
	width: ${props => props._width};
	height: ${({ theme }) => theme.buttonHeights.base};
	font-size: ${({ theme }) => theme.fontSizes.xs};
	font-weight: bold;
	color: ${({ theme }) => theme.colors.blue};
	background: ${({ theme }) => theme.colors.off_white};
	border: 2px solid ${({ theme }) => theme.colors.blue};
	border-radius: 11px;
	cursor: pointer;
`;
const ButtonText = styled.div`
	padding: 0 4%;
`;

export default WhiteButtons;
