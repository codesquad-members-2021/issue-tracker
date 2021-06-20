import { StyledWhiteButton } from "styles/StyledButtons";

const CancelButton = ({ clickEvent, children }) => {
	return (
		<>
			<StyledWhiteButton onClick={clickEvent}>{children}</StyledWhiteButton>
		</>
	);
};

export default CancelButton;
