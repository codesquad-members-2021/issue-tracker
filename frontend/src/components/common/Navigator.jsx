import styled from "styled-components";
import ButtonGroup from "./ButtonGroup";
import AddButton from "./AddButton";
const Navigator = () => {
	return (
		<Wrapper>
			<ButtonGroup
				milestoneCount={"N"}
				milestoneClickEvent={() => {}}
				labelCount={"N"}
				labelClickEvent={() => {}}
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
