import styled from "styled-components";
import { TabButton } from "styles/StyledButtons";
import { ReactComponent as ArrowIcon } from "images/arrow_down.svg";
const DropDownButton = ({ text, clickEvent }) => {
	return (
		<>
			<TabButton onClick={clickEvent}>
				<ButtonText>{text}</ButtonText>
				<ArrowIcon />
			</TabButton>
		</>
	);
};

const ButtonText = styled.div`
	padding-right: 60px;
`;
export default DropDownButton;
