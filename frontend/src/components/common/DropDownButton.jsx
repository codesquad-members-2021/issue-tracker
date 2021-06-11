import styled from "styled-components";
import { TabButton } from "styles/StyledButtons";
import { ReactComponent as ArrowIcon } from "images/arrow_down.svg";
import theme from "styles/theme";
const DropDownButton = ({ text, clickEvent }) => {
	return (
		<>
			<TabButton onClick={clickEvent}>
				<ButtonText>{text}</ButtonText>
				<ArrowIcon stroke={theme.grayScale.label} />
			</TabButton>
		</>
	);
};

const ButtonText = styled.div`
	padding-right: 60px;
`;
export default DropDownButton;
