import styled from "styled-components";
import { ReactComponent as SearchIcon } from "images/search.svg";
import DropDownButton from "components/common/DropDownButton";
import theme from "styles/theme";
import FilterModal from "components/common/FilterModal";
import { useState, useEffect, useCallback } from "react";
import {
	clickedFilterAtomState,
	filterBarInputAtomState,
} from "RecoilStore/Atoms";
import { useSetRecoilState, useRecoilValue } from "recoil";
const MenuFilterBar = () => {
	const [isFilterClicked, setIsFilterClicked] = useState(false);
	const setClickedFilterState = useSetRecoilState(clickedFilterAtomState);
	const filterBarInput = useRecoilValue(filterBarInputAtomState);

	const getFilterBarString = () => {
		return Object.entries(filterBarInput).reduce((acc, item) => {
			if (item[1]) {
				if (item[0] === "placeholder") acc += `${item[1]} `;
				else acc += `${item[0]}:${item[1]} `;
			}
			console.log(acc);
			return acc;
		}, "");
	};

	const handleClick = useCallback(e => {
		isFilterClicked === false
			? setIsFilterClicked(true)
			: setIsFilterClicked(false);
		setClickedFilterState(e.target.textContent);
	});

	useEffect(() => {
		window.addEventListener("click", closeFilterModal);
		return function cleanup() {
			window.removeEventListener("click", closeFilterModal);
		};
	}, [isFilterClicked]);

	const closeFilterModal = e => {
		const target = e.target;
		if (isFilterClicked && !target.closest(".filter-modal"))
			setIsFilterClicked(false);
	};

	return (
		<>
			<MenuFilterLayout>
				<DropDownButton
					text={"필터"}
					clickEvent={handleClick}
					width={({ theme }) => theme.buttonWidths.base}
					radius={"left"}
				/>
				<FilterInputContainer>
					<FilterInput>
						<FilterInputIconContainer>
							<SearchIcon stroke={theme.grayScale.placeholder} />
						</FilterInputIconContainer>
						<FilterInputText
							value={getFilterBarString(filterBarInput)}
						></FilterInputText>
					</FilterInput>
				</FilterInputContainer>
			</MenuFilterLayout>
			{isFilterClicked && <FilterModal />}
		</>
	);
};

const MenuFilterLayout = styled.div`
	display: flex;
	width: 700px;
	height: 40px;
	position: relative;
	margin-bottom: 24px;
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
	padding: 0;
	background-color: ${theme.grayScale.input_background};
	border-radius: ${theme.border_radius_mix.right};
`;
const FilterInputIconContainer = styled.div`
	padding: 11px;
`;
const FilterInputText = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	background-color: ${theme.grayScale.input_background};
	color: ${theme.grayScale.placeholder};
	border-radius: ${theme.border_radius_mix.right};
`;

export default MenuFilterBar;
