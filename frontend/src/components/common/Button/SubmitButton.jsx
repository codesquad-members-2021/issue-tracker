import { AddBtn } from "styles/StyledButtons";

const SubmitButton = ({ clickevent, children }) => {
	return (
		<>
			<AddBtn onClick={clickevent}>{children}</AddBtn>
		</>
	);
};

export default SubmitButton;
