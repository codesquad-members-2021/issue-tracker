import { AddBtn } from "styles/StyledButtons";
import { ReactComponent as PlusIcon } from "images/plus.svg";
import styled from "styled-components";
import theme from "styles/theme";
const AddButton = ({ text, clickEvent }) => {
	return (
		<>
			<AddBtn onClick={clickEvent}>
				<PlusIcon stroke={theme.grayScale.off_white} />
				<ButtonText>{text}</ButtonText>
			</AddBtn>
		</>
	);
};
const ButtonText = styled.div`
	padding: 0 4%;
`;

export default AddButton;
