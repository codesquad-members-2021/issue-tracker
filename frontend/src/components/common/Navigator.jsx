import styled from "styled-components";
import ButtonGroup from "./Button/ButtonGroup";
import AddButton from "./Button/AddButton";
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
		<NavigatorLayout>
			<ButtonGroup
				milestoneCount={"N"}
				milestoneClickEvent={handleMilestoneClick}
				labelCount={"N"}
				labelClickEvent={handleLabelClick}
				isMainPage={false}
			/>
			<AddButton text="추가" clickEvent={() => {}} />
		</NavigatorLayout>
	);
};

const NavigatorLayout = styled.div`
	display: flex;
	justify-content: space-between;
`;

export default Navigator;
