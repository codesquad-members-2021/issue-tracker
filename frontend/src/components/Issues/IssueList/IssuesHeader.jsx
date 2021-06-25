import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { ReactComponent as Archive } from "images/archive.svg";
import { ReactComponent as Alert } from "images/alert-circle.svg";
import { ReactComponent as DownArrow } from "images/chevron_down.svg";
import theme from "styles/theme";
import DropDownButton from "components/common/Button/DropDownButton";
import FilterModal from "components/common/FilterModal";
import { filter } from "data";
import { StyledGridTitleCard } from "styles/StyledCards";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
	selectedIssueCntState,
	clickedFilterState,
	filterBarInputState,
} from "RecoilStore/Atoms";

const IssuesHeader = ({
	isAnyIssueSelected,
	setIsAnyIssueSelected,
	isAllIssueSelected,
	setIsAllIssueSelected,
	issuesCnt,
	selectedCards,
}) => {
	const [selectedIssues, setSelectedIssues] = useRecoilState(
		selectedIssueCntState
	);
	const buttonNames = ["담당자", "레이블", "마일스톤", "작성자"];
	const setClickedFilterState = useSetRecoilState(clickedFilterState);

	//----------중복 코드from MeuFilter --------
	const [isFilterClicked, setIsFilterClicked] = useState(false);
	const handleClick = useCallback(e => {
		isFilterClicked === false
			? setIsFilterClicked(true)
			: setIsFilterClicked(false);
		console.dir(e.target.textContent);
		console.dir(e.target);
		setClickedFilterState(e.target.textContent);
		// setFilterBarInputState(e.target.textContent); //여기
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

	const checkAllIssue = () => {
		setIsAllIssueSelected(!isAllIssueSelected);
		isAllIssueSelected ? setSelectedIssues(0) : setSelectedIssues(issuesCnt);
	};

	useEffect(() => {
		if (selectedIssues === 0) setIsAnyIssueSelected(false);
		else setIsAnyIssueSelected(true);
	}, [selectedIssues]);

	return (
		<StyledGridTitleCard gridRate={[0.5, 2, 8.3]}>
			<CheckBox>
				<input type="checkbox" onChange={checkAllIssue} />
			</CheckBox>
			{isAnyIssueSelected ? (
				<div>{selectedIssues}개 이슈 선택</div>
			) : (
				<FilterOpenClose>
					<TextIconDivider>
						<Alert stroke={theme.grayScale.title_active} /> 열린 이슈(n)
					</TextIconDivider>
					<TextIconDivider>
						<Archive stroke={theme.grayScale.label} /> 닫힌 이슈(n)
					</TextIconDivider>
				</FilterOpenClose>
			)}
			<FilterMain>
				{isAnyIssueSelected ? (
					<OpenCloseEdit>
						<TextIconDivider>
							<DropDownButton
								text="상태 수정"
								clickEvent={handleClick}
								className={"issue-header-button"}
								width={({ theme }) => theme.buttonWidths.lg}
								border={"none"}
							></DropDownButton>
							{isFilterClicked && <FilterModal />}
						</TextIconDivider>
					</OpenCloseEdit>
				) : (
					<FiltersWrapper>
						{buttonNames.map((filter, idx) => (
							<TextIconDivider>
								<DropDownButton
									text={filter}
									clickEvent={handleClick}
									key={`filter-${idx}`}
									className={"issue-header-button"}
									width={({ theme }) => theme.buttonWidths.small}
									border={"none"}
								></DropDownButton>
							</TextIconDivider>
						))}
						{isFilterClicked && <FilterModal />}
					</FiltersWrapper>
				)}
			</FilterMain>
		</StyledGridTitleCard>
	);
};

export default IssuesHeader;

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
`;

export const CheckBox = styled.div`
	display: flex;
	justify-content: center;
`;

const TextIconDivider = styled.div`
	width: 100%;
`;
