import styled from "styled-components";
import { ReactComponent as SearchIcon } from "images/search.svg";
import DropDownButton from "components/common/DropDownButton";
import theme from "styles/theme";
const MenuFilterBar = () => {
	return (
		<MenuFilterLayout>
			<DropDownButton text={"필터"} />
			<FilterInputContainer>
				<FilterInput>
					<SearchIcon />
					<FilterInputText>is:issue is:open</FilterInputText>
				</FilterInput>
			</FilterInputContainer>
		</MenuFilterLayout>
	);
};

const MenuFilterLayout = styled.div`
	display: flex;
	width: 601px;
	height: 40px;
`;
const FilterInputContainer = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid ${theme.grayScale.line};
	border-radius: ${theme.border_radius_mix.right};
`;
const FilterInput = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	padding: 2.3%;
	background-color: ${theme.grayScale.input_background};
	border-radius: ${theme.border_radius_mix.right};
`;
const FilterInputText = styled.div`
	padding: 0.4% 2%;
	color: ${theme.grayScale.placeholder};
`;

export default MenuFilterBar;
