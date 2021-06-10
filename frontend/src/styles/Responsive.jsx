import styled from "styled-components";
import { deviceSizes } from "styles/theme";
const Responsive = ({ children, ...rest }) => {
	return <ResponsiveBlock>{children}</ResponsiveBlock>;
};

const ResponsiveBlock = styled.div`
	max-width: 100%;
	margin: 0 auto;
	box-sizing: border-box;

	@media (max-width: 1024px) {
		width: 100%;
		/* padding: 0 30px; */
	}
	@media (max-width: 768px) {
		width: 100%;
		/* padding: 0 20px; */
	}
`;

export default Responsive;
