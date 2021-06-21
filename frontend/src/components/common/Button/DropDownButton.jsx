import styled from "styled-components";
import { TabButton } from "styles/StyledButtons";
import { ReactComponent as ArrowIcon } from "images/arrow_down.svg";
import theme from "styles/theme";
const DropDownButton = ({ text, clickEvent, width, border, radius }) => {
	return (
		<>
			<TabButton
				onClick={clickEvent}
				_width={width}
				_border={border}
				_radius={radius}
			>
				<ButtonText>{text}</ButtonText>
				<ArrowIcon stroke={theme.grayScale.label} />
			</TabButton>
		</>
	);
};

const ButtonText = styled.div`
	padding-right: 30%;
`;
export default DropDownButton;
