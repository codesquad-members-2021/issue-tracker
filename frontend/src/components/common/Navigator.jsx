import styled from "styled-components";
import ButtonGroup from "./Button/ButtonGroup";
import AddButton from "./Button/BlueButtons";
import CancelButton from "components/common/Button/WhiteButtons";
import { useRecoilState, useRecoilValue } from "recoil";
import {
	labelButtonFlagState,
	milestoneButtonFlagState,
	milestoneAddButtonFlagState,
} from "RecoilStore/Atoms";
import { useState } from "react";
import { milestoneCountState } from "RecoilStore/Atoms";

const Navigator = () => {
	const [isAddButton, setIsAddButton] = useState(true);
	const [milestoneFlag, setMilestoneFlag] = useRecoilState(
		milestoneButtonFlagState
	);
	const [labelFlag, setLabelFlag] = useRecoilState(labelButtonFlagState);
	const [milestoneAddBtnFlag, setMilestoneAddBtnFlag] = useRecoilState(
		milestoneAddButtonFlagState
	);
	const milestoneCountValue = useRecoilValue(milestoneCountState);

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
		setIsAddButton((x) => !x);
	};

	return (
		<NavigatorLayout>
			<ButtonGroup
				milestoneCount={milestoneCountValue}
				milestoneClickEvent={handleMilestoneClick}
				labelCount={"N"}
				labelClickEvent={handleLabelClick}
				isMainPage={false}
			/>

			{isAddButton ? (
				<AddButton
					text="추가"
					icon="plus"
					size="m"
					clickHandler={handelAddClick}
				/>
			) : (
				<CancelButton
					text="취소"
					icon="cancel"
					size="m"
					clickHandler={() => setIsAddButton((x) => !x)}
				/>
			)}
		</NavigatorLayout>
	);
};

const NavigatorLayout = styled.div`
	display: flex;
	justify-content: space-between;
`;

export default Navigator;
