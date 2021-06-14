import styled from "styled-components";
import { ReactComponent as SearchIcon } from "images/search.svg";
import DropDownButton from "components/common/DropDownButton";
import theme from "styles/theme";
import FilterModal from "components/common/FilterModal";
import { useState, useEffect } from "react";
const MenuFilterBar = () => {
	const [isFilterClicked, setIsFilterClicked] = useState(false); //isFilterClicked말고 flag에 쓸만한 이름 추천좀..
	const handleClick = () => {
		isFilterClicked === false
			? setIsFilterClicked(true)
			: setIsFilterClicked(false);
	};
	//토글 하면됨

	useEffect(() => {
		document.body.addEventListener("click", closePopup);
		return function cleanup() {
			window.removeEventListener("click", closePopup);
		};
	}, []);

	const closePopup = e => {
		const target = e.target;
		// console.log(target);
		!target.closest(".filter-modal") && setIsFilterClicked(false);
	};

	return (
		<>
			<MenuFilterLayout>
				<DropDownButton text={"필터"} clickEvent={handleClick} />
				<FilterInputContainer>
					<FilterInput>
						<SearchIcon stroke={theme.grayScale.placeholder} />
						<FilterInputText>is:issue is:open</FilterInputText>
					</FilterInput>
				</FilterInputContainer>
			</MenuFilterLayout>
			{/* {<FilterModal />} */}
		</>
	);
};

const MenuFilterLayout = styled.div`
	display: flex;
	width: 601px;
	height: 40px;
	position: relative;
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
