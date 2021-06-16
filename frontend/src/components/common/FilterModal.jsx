import { useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useState } from "react";
import styled from "styled-components";
import { filter } from "data";
import {
	filterBarInputAtomState,
	clickedFilterAtomState,
} from "RecoilStore/Atoms";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import getEngKey from "util/getEngKey";
{
	/* 클릭된게 어떤 필터인지를 modal이 알아야 함  useRecoilState 쓰려다 오류나서 state내림 */
}
const FilterModal = () => {
	const [value, setValue] = useState("");
	const filterType = useRecoilValue(clickedFilterAtomState);
	const [filterBarInputState, setFilterBarInputState] = useRecoilState(
		filterBarInputAtomState
	);

	// Recoil로직 (구현 예정)
	// 1. 필터별로 선택된 필터는 atom으로 관리됨(default는 null임)
	// 2. 이슈리스트 필터링, 검색창에 현재 선택된 ent.target.value);
	//필터들 보여줄 때는 그 Atom의 조합으로 보여줌 (특히 검색창엔 selector이용해서 붙이면 간단할듯)

	//

	const handleChange = event => {
		setValue(event.target.value);
		setFilterStateByType(event.target.value);
	};

	const key = getEngKey(filterType);

	const setFilterStateByType = value => {
		// console.log(filterType);
		switch (filterType) {
			case "담당자": {
				console.log("담당자,filterBarInputState");
				setFilterBarInputState({
					...filterBarInputState,
					assignee: value,
				});
				break;
			}
			case "레이블": {
				setFilterBarInputState({
					...filterBarInputState,
					label: value,
				});
				break;
			}
			case "마일스톤": {
				setFilterBarInputState({
					...filterBarInputState,
					milestone: value,
				});
				break;
			}
			case "작성자": {
				setFilterBarInputState({
					...filterBarInputState,
					author: value,
				});
				break;
			}
			case "필터": {
				setFilterBarInputState({
					...filterBarInputState,
					issue: value,
				});
				break;
			}
			default: {
				console.error("setFilterStateByType unhandled type");
			}
		}
	};

	const getFilterModalData = type => {
		return filter[getEngKey(type)];
	};

	const filterData = getFilterModalData(filterType);
	console.log(filterData);
	return (
		<FilterModalLayout className="filter-modal">
			<FormControl component="fieldset">
				<FilterTitle component="legend">
					{filterType === "필터" ? "" : filterType} 필터
				</FilterTitle>
				<FilterRadioContainer
					aria-label="issue"
					name="issue"
					value={value}
					onChange={handleChange}
				>
					{filterData &&
						filterData.map((text, idx) => (
							<FilterControlLabel
								value={text}
								control={<Radio color="default" />}
								label={text}
								labelPlacement="start"
								key={idx}
								checked={filterBarInputState[key] === text} //
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
