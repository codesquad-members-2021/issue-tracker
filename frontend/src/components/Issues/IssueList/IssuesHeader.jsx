import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Archive } from "images/archive.svg";
import { ReactComponent as Alert } from "images/alert-circle.svg";
import { ReactComponent as DownArrow } from "images/chevron_down.svg";
import theme from "styles/theme";
import { useEffect, useCallback } from "react";
import DropDownButton from "components/common/DropDownButton";
import FilterModal from "components/common/FilterModal";
import { filter } from "data";
import { clickedFilterAtomState } from "MyRecoil/atom";
import { useRecoilState } from "MyRecoil";
const buttonNames = ["담당자", "레이블", "마일스톤", "작성자"];

const IssuesHeader = ({}) => {
	const [isIssueOpenFilter, setIsIssueOpenFilter] = useState(true); // means issueOpen clicked
	const [isIssueSelected, setIsIssueSelected] = useState(false); // 상태 위치 협의 후 수정
	const [isAllIssueSelected, setIsAllIssueSelected] = useState(false);
	const [clickedFilter, setClickedFilter] = useState("");
	const checkAllIssue = () => {
		setIsAllIssueSelected(!isAllIssueSelected);
	};

	//----------중복 코드from MeuFilter --------
	const [isFilterClicked, setIsFilterClicked] = useState(false);
	const handleClick = useCallback(e => {
		isFilterClicked === false
			? setIsFilterClicked(true)
			: setIsFilterClicked(false);
		console.dir(e.target.textContent);
		console.dir(e.target);
		setClickedFilter(e.target.textContent);
	});

	useEffect(() => {
		window.addEventListener("click", closeFilterModal);
		return function cleanup() {
			window.removeEventListener("click", closeFilterModal);
		};
	}, [isFilterClicked]);

	const closeFilterModal = e => {
		const target = e.target;
		if (
			isFilterClicked &&
			!target.closest(".filter-modal") &&
			!target.closest(".issue-header-button")
		)
			setIsFilterClicked(false);
	};
	//----------여기 까지 중복 코드from MeuFilter --------/

	useEffect(() => {
		isAllIssueSelected && console.log("issue checkbox all selected");
	}, [isAllIssueSelected]);

	return (
		<StyledIssuesHeader>
			<CheckBox>
				<input type="checkbox" onChange={checkAllIssue} />
			</CheckBox>
			<FilterOpenClose>
				<TextIconDivider>
					<Alert /> 열린 이슈(n)
				</TextIconDivider>
				<TextIconDivider>
					<Archive /> 닫힌 이슈(n)
				</TextIconDivider>
			</FilterOpenClose>
			<FilterMain>
				{isIssueSelected ? (
					<OpenCloseEdit>
						<TextIconDivider>
							상태 수정
							<DownArrow />
						</TextIconDivider>
					</OpenCloseEdit>
				) : (
					<FiltersWrapper>
						<TextIconDivider>
							{buttonNames.map((filter, idx) => (
								<DropDownButton
									text={filter}
									clickEvent={handleClick}
									key={`filter-${idx}`}
									className={"issue-header-button"}
									width={({ theme }) => theme.buttonWidths.small}
									border={"none"}
									id={filter}
								></DropDownButton>
							))}
							{isFilterClicked && <FilterModal filterType={clickedFilter} />}
							{/* 클릭된게 어떤 필터인지를 modal이 알아야 함  useRecoilState 쓰려다 오류나서 state props로 내림 */}
							{/* 🔥recoil로 수정 필요 */}
							{/* 🔥회살표 클릭해도 필터 제대로 뜨도록 수정필요 */}
						</TextIconDivider>
					</FiltersWrapper>
				)}
			</FilterMain>
		</StyledIssuesHeader>
	);
};

export default IssuesHeader;

const StyledIssuesHeader = styled.div`
	display: grid;
	align-items: center;
	height: 64px;
	border: 1px solid ${theme.grayScale.line};
	border-radius: ${theme.border_radius.lg} ${theme.border_radius.lg} 0px 0px;
	grid-template-columns: 0.5fr 1.5fr 8.3fr;
`;

const FilterOpenClose = styled.div`
	display: flex;
	justify-content: space-between;
`;

const FilterMain = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const OpenCloseEdit = styled.div`
	display: flex;
	width: 200px;
	justify-content: center;
`;

const FiltersWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	position: relative;
	/* outline: red 1px solid; */
`;

export const CheckBox = styled.div`
	display: flex;
	justify-content: center;
`;

const TextIconDivider = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
