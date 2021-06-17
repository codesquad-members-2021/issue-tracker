import { useState } from "react";
import { filterBarInputState, clickedFilterState } from "RecoilStore/Atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import styled from "styled-components";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { filterData } from "data";

import getEngKey from "util/getEngKey";

const FilterModal = () => {
	const [clickedFilter, setClickedFilterState] = useState("");
	const filterType = useRecoilValue(clickedFilterState);
	const [filterBarInput, setFilterBarInputState] = useRecoilState(
		filterBarInputState
	);

	const key = getEngKey(filterType);
	const handleChange = event => {
		setClickedFilterState(event.target.value);
		setFilterStateByType(event.target.value);
	};

	const setFilterStateByType = clickedValue => {
		const updatedValue =
			clickedValue === filterBarInput[getEngKey(filterType)]
				? null
				: clickedValue;

		switch (filterType) {
			case "담당자": {
				setFilterBarInputState({
					...filterBarInput,
					assignee: updatedValue,
				});
				break;
			}
			case "레이블": {
				setFilterBarInputState({
					...filterBarInput,
					label: updatedValue,
				});
				break;
			}
			case "마일스톤": {
				setFilterBarInputState({
					...filterBarInput,
					milestone: updatedValue,
				});
				break;
			}
			case "작성자": {
				setFilterBarInputState({
					...filterBarInput,
					author: updatedValue,
				});
				break;
			}
			case "필터": {
				setFilterBarInputState({
					...filterBarInput,
					issue: updatedValue,
				});
				break;
			}
			default: {
				console.error("setFilterStateByType unhandled type");
			}
		}
	};

	const filterDataByType = filterData[getEngKey(filterType)];

	return (
		<FilterModalLayout className="filter-modal">
			<FormControl component="fieldset">
				<FilterTitle component="legend">
					{filterType === "필터" ? "" : filterType} 필터
				</FilterTitle>
				<FilterRadioContainer
					aria-label="issue"
					name="issue"
					value={clickedFilter}
					onClick={handleChange}
				>
					{filterDataByType &&
						filterDataByType.map((text, idx) => (
							<FilterControlLabel
								value={text}
								control={<Radio color="default" />}
								label={text}
								labelPlacement="start"
								key={`filter-control-label-${idx}`}
								checked={filterBarInput[key] === text}
							/>
						))}
				</FilterRadioContainer>
			</FormControl>
		</FilterModalLayout>
	);
};

const FilterModalLayout = styled.div`
	position: absolute;
	top: 45px;
	background-color: white;
	text-align: left;
	border-radius: 16px;
	border: 1px solid ${({ theme }) => theme.grayScale.line};
`;

const FilterControlLabel = styled(FormControlLabel)`
	display: flex;
	justify-content: space-between;
	margin: 0;
`;

const FilterRadioContainer = styled(RadioGroup)`
	padding: 8px 16px;
`;

const FilterTitle = styled(FormLabel)`
	background-color: ${({ theme }) => theme.grayScale.background};
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.grayScale.line};
	border-radius: 16px 16px 0px 0px;
	padding: 8px 16px;
	font-size: 18px;
	color: ${({ theme }) => theme.grayScale.title_active};
	line-height: 32px;
`;

export default FilterModal;
