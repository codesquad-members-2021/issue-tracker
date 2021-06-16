import styled from "styled-components";
import ButtonGroup from "./ButtonGroup";
import AddButton from "./AddButton";
const Navigator = () => {
	return (
		<Wrapper>
			<ButtonGroup
				milestoneCount={3}
				milestoneClickEvent={() => {}}
				labelCount={3}
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
