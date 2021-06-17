import styled from "styled-components";
import ButtonGroup from "components/common/ButtonGroup";
import AddButton from "components/common/AddButton";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
	labelButtonFlagState,
	milestoneButtonFlagState,
} from "RecoilStore/Atoms";
const MenuTab = () => {
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
				milestoneCount={0}
				labelCount={0}
				milestoneClickEvent={handleMilestoneClick}
				labelClickEvent={handleLabelClick}
				isMainPage={true}
			/>
			<Link to="main/new">
				<AddButton text={"이슈 작성"} />
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
`;

export default MenuTab;
