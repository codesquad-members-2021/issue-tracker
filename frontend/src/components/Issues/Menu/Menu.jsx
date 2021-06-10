import styled from "styled-components";
import MenuFilterBar from "./MenuFilterBar";
import MenuTab from "./MenuTab";

const Menu = () => {
	return (
		<MenuLayout>
			<MenuFilterBar />
			<MenuTab />
		</MenuLayout>
	);
};

const MenuLayout = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export default Menu;
