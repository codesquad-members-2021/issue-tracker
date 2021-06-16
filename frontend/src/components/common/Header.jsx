import styled from "styled-components";
import { ReactComponent as Logo } from "images/LogotypeMedium.svg";
import { Link } from "react-router-dom";
import getUserInfo from "util/getUserInfo";

const Header = () => {
	const userInfo = getUserInfo();
	console.log(userInfo);
	return (
		<StyleHeader>
			<Link to="/main">
				<Logo />
			</Link>
			<ImgWrapper>
				<img src={userInfo.imageUrl} alt={userInfo.gitHubId} />
			</ImgWrapper>
		</StyleHeader>
	);
};

export default Header;

const StyleHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 27px 0px;
`;

const ImgWrapper = styled.div`
	width: 44px;
	height: 44px;
	border: 1px solid ${({ theme }) => theme.grayScale.line};
	border-radius: 50%;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
	}
`;
