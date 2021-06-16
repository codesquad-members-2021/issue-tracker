import { StyledCancelButton } from "styles/StyledButtons";

const CancelButton = ({ clickEvent, children }) => {
	return (
		<>
			<StyledCancelButton onClick={clickEvent}>{children}</StyledCancelButton>
		</>
	);
};

export default CancelButton;
