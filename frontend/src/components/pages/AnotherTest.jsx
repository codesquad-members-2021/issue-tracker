import { useRecoilValue } from "MyRecoil/useRecoilValue";
import { milestoneState } from "MyRecoil/atom";

export const AnotherTest = () => {
	const milestoneState = useRecoilValue(milestoneState);
	const milestoneFilterList = milestoneState.map((filter, i) => (
		<div key={i}> {filter}</div>
	));
	return (
		<>
			<h2>필터 모음</h2>
			<ul>
				<li>마일스톤들: {milestoneFilterList}</li>
			</ul>
		</>
	);
};
