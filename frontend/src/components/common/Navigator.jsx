import styled from "styled-components";
import ButtonGroup from "./ButtonGroup";
import AddButton from "./AddButton";
import { useSetRecoilState } from "recoil";
import {
	labelButtonFlagState,
	milestoneButtonFlagState,
} from "RecoilStore/Atoms";

const Navigator = () => {
	const setMilestoneFlag = useSetRecoilState(milestoneButtonFlagState);
	const setLabelFlag = useSetRecoilState(labelButtonFlagState);
	const handleMilestoneClick = () => {
		setMilestoneFlag(true);
		setLabelFlag(false);
	};
	const handleLabelClick = () => {
		setMilestoneFlag(false);
		setLabelFlag(true);
	};

	return (
		<Wrapper>
			<ButtonGroup
				milestoneCount={"N"}
				milestoneClickEvent={handleMilestoneClick}
				labelCount={"N"}
				labelClickEvent={handleLabelClick}
				isMainPage={false}
			/>
			<AddButton text="추가" clickEvent={() => {}} />
		</Wrapper>
	);
};

export default Navigator;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
