import styled from "styled-components";
import ButtonGroup from "./Button/ButtonGroup";
import AddButton from "./Button/BlueButtons";
import CancelButton from "components/common/Button/WhiteButtons";
import { useRecoilState, useRecoilValue } from "recoil";
import {
	labelButtonFlagState,
	milestoneButtonFlagState,
	milestoneAddButtonFlagState,
	labelAddButtonFlagState,
	navigatorAddButtonFlagState,
} from "RecoilStore/Atoms";
import { useState } from "react";
import { milestoneCountState } from "RecoilStore/Atoms";

const Navigator = () => {
	// const [isAddButton, setIsAddButton] = useState(true);
	const [addButtonFlag, setAddButtonFlag] = useRecoilState(
		navigatorAddButtonFlagState
	);
	const [milestoneFlag, setMilestoneFlag] = useRecoilState(
		milestoneButtonFlagState
	);
	const [labelFlag, setLabelFlag] = useRecoilState(labelButtonFlagState);
	const [milestoneAddBtnFlag, setMilestoneAddBtnFlag] = useRecoilState(
		milestoneAddButtonFlagState
	);
	const [labelAddBtnFlag, setLabelAddBtnFlag] = useRecoilState(
		labelAddButtonFlagState
	);
	//밑에 하나로 묶어도 될 것 같음

	const milestoneCountValue = useRecoilValue(milestoneCountState);


	const handleMilestoneClick = () => {
		setMilestoneFlag(true);
		setLabelFlag(false);
	};
	const handleLabelClick = () => {
		setMilestoneFlag(false);
		setLabelFlag(true);
	};
	//Refactoring
	//리렌더 2번 일어남
	const handleClick = () => {
		milestoneFlag
			? setMilestoneAddBtnFlag(!milestoneAddBtnFlag)
			: setLabelAddBtnFlag(!labelAddBtnFlag);
		setAddButtonFlag(!addButtonFlag);

	};

	return (
		<NavigatorLayout>
			{/* 버튼 그룹 카운트 자리에 데이터 길이 넣어주기 */}
			<ButtonGroup
				milestoneCount={milestoneCountValue}
				milestoneClickEvent={handleMilestoneClick}
				labelCount={"N"}
				labelClickEvent={handleLabelClick}
				isMainPage={false}
			/>

			{addButtonFlag ? (
				<CancelButton
					text="취소"
					icon="cancel"
					size="m"
					clickHandler={handleClick}
				/>
			) : (
				<AddButton
					text="추가"
					icon="plus"
					size="m"
					clickHandler={handleClick}
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
