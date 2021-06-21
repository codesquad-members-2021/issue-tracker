import Button from "@material-ui/core/Button";
import { ReactComponent as EditIcon } from "images/edit.svg";
import { ReactComponent as PlusIcon } from "images/plus.svg";
import styled from "styled-components";
import theme from "styles/theme";

const BlueButtons = ({ text, icon, size, clickHandler }) => {
	const getIcon = () => {
		switch (icon) {
			case "plus": {
				return <PlusIcon stroke={theme.grayScale.off_white} />;
			}
			case "edit": {
				return <EditIcon stroke={theme.grayScale.off_white} />;
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
		<BlueButton _width={getWidth()} onClick={clickHandler}>
			{getIcon()}
			<ButtonText>{text}</ButtonText>
		</BlueButton>
	);
};

const BlueButton = styled(Button)`
	width: ${props => props._width};
	height: ${({ theme }) => theme.buttonHeights.base};
	font-size: ${({ theme }) => theme.fontSizes.xs};
	font-weight: bold;
	color: ${({ theme }) => theme.grayScale.off_white};
	background-color: ${({ theme }) => theme.colors.blue};
	border-radius: ${({ theme }) => theme.border_radius.base};
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.dark_blue};
	}
`;
const ButtonText = styled.div`
	padding: 0 4%;
`;
export default BlueButtons;
