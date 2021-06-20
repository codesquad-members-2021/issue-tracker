import styled from "styled-components";
import ButtonGroup from "./Button/ButtonGroup";
import AddButton from "./Button/AddButton";
import { useRecoilState } from "recoil";
import {
	labelButtonFlagState,
	milestoneButtonFlagState,
	milestoneAddButtonFlagState,
} from "RecoilStore/Atoms";

const Navigator = () => {
	const [milestoneFlag, setMilestoneFlag] = useRecoilState(
		milestoneButtonFlagState
	);
	const [labelFlag, setLabelFlag] = useRecoilState(labelButtonFlagState);
	const [milestoneAddBtnFlag, setMilestoneAddBtnFlag] = useRecoilState(
		milestoneAddButtonFlagState
	);

	const handleMilestoneClick = () => {
		setMilestoneFlag(true);
		setLabelFlag(false);
	};
	const handleLabelClick = () => {
		setMilestoneFlag(false);
		setLabelFlag(true);
	};

	const handelAddClick = () => {
		if (milestoneFlag) setMilestoneAddBtnFlag(!milestoneAddBtnFlag);
		else if (!milestoneFlag) setMilestoneAddBtnFlag(false);
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
			<AddButton text="추가" clickEvent={handelAddClick} />
		</NavigatorLayout>
	);
};

const NavigatorLayout = styled.div`
	display: flex;
	justify-content: space-between;
`;

export default Navigator;
