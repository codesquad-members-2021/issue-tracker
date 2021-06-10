import styled from "styled-components";

const MenuFilterBar = () => {
	return (
		<MenuFilterLayout>
			<FilterButton>필터</FilterButton>
			<FilterInput />
		</MenuFilterLayout>
	);
};

const MenuFilterLayout = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	width: 601px;
	height: 40px;
	border: 1px solid #d9dbe9;
	border-radius: 11px;
`;
const FilterInput = styled.input`
	border: none;
`;
const FilterButton = styled.div`
	/* Button */
	background: #f7f7fc;
	border-radius: 11px 0px 0px 11px;
	/* outline: red 1px solid; */
	padding: 10px;
`;

const MenuFilterDropDown = styled.div``;
export default MenuFilterBar;
