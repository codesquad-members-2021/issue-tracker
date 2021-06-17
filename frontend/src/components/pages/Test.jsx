import { useState } from "react";
import { useRecoilState } from "MyRecoil/useRecoilState";
import { labelState } from "MyRecoil/atom";
import { AnotherTest } from "./AnotherTest";

export const Test = () => {
	const [labelFilterInput, setLabelFilterInput] = useState();
	const [labelFilterState, setLabelFilterState] = useRecoilState(labelState);

	const labelFilterList = labelFilterState.map((filter, i) => (
		<span key={i}>{filter}</span>
	));

	const setLabelFilterInputVal = (e) => {
		setLabelFilterInput(e.target.value);
	};

	const setLabelFilter = () => {
		setLabelFilterState((labelFilterState) => [
			...labelFilterState,
			labelFilterInput,
		]);
	};

	return (
		<>
			{labelFilterList}
			<input onChange={setLabelFilterInputVal} placeholder="라벨 필터" />
			<button onClick={setLabelFilter}>라벨필터추가</button>
		</>
	);
};
