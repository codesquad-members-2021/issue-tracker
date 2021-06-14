import styled from "styled-components";
import { ReactComponent as Logo } from "images/LogotypeMedium.svg";
import { ReactComponent as UserImg } from "images/UserImageLarge.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<StyleHeader>
			<Link to="/main">
				<Logo />
			</Link>
			<UserImg />
		</StyleHeader>
	);
};

export default Header;

const StyleHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
