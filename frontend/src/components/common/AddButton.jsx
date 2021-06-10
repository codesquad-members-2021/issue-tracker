import { AddBtn } from "styles/StyledButtons";
import { ReactComponent as PlusIcon } from "images/plus.svg";
import styled from "styled-components";

const AddButton = ({ text, clickEvent }) => {
	return (
		<>
			<AddBtn onClick={clickEvent}>
				<PlusIcon />
				<ButtonText>{text}</ButtonText>
			</AddBtn>
		</>
	);
};
const ButtonText = styled.div`
	padding: 0 4%;
`;

export default AddButton;
