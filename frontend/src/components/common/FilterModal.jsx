import { useState } from "react";
import {
	filterBarInputAtomState,
	clickedFilterAtomState,
} from "RecoilStore/Atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import styled from "styled-components";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { filter } from "data";

import getEngKey from "util/getEngKey";

const FilterModal = () => {
	const [clickedFilterState, setClickedFilterState] = useState("");
	const filterType = useRecoilValue(clickedFilterAtomState);
	const [filterBarInputState, setFilterBarInputState] = useRecoilState(
		filterBarInputAtomState
	);

	const key = getEngKey(filterType);
	const handleChange = event => {
		setClickedFilterState(event.target.value);
		setFilterStateByType(event.target.value);
	};

	const setFilterStateByType = clickedValue => {
		const updatedValue =
			clickedValue === filterBarInputState[getEngKey(filterType)]
				? null
				: clickedValue;

		switch (filterType) {
			case "담당자": {
				setFilterBarInputState({
					...filterBarInputState,
					assignee: updatedValue,
				});
				break;
			}
			case "레이블": {
				setFilterBarInputState({
					...filterBarInputState,
					label: updatedValue,
				});
				break;
			}
			case "마일스톤": {
				setFilterBarInputState({
					...filterBarInputState,
					milestone: updatedValue,
				});
				break;
			}
			case "작성자": {
				setFilterBarInputState({
					...filterBarInputState,
					author: updatedValue,
				});
				break;
			}
			case "필터": {
				setFilterBarInputState({
					...filterBarInputState,
					issue: updatedValue,
				});
				break;
			}
			default: {
				console.error("setFilterStateByType unhandled type");
			}
		}
	};

	const filterData = filter[getEngKey(filterType)];

	return (
		<FilterModalLayout className="filter-modal">
			<FormControl component="fieldset">
				<FilterTitle component="legend">
					{filterType === "필터" ? "" : filterType} 필터
				</FilterTitle>
				<FilterRadioContainer
					aria-label="issue"
					name="issue"
					value={clickedFilterState}
					onClick={handleChange}
				>
					{filterData &&
						filterData.map((text, idx) => (
							<FilterControlLabel
								value={text}
								control={<Radio color="default" />}
								label={text}
								labelPlacement="start"
								key={`filter-control-label-${idx}`}
								checked={filterBarInputState[key] === text}
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
