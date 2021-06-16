import styled from "styled-components";
import Navigator from "components/common/Navigator";
import Milestones from "components/Milestones/Milestones";

const MilestonesPage = () => {
	return (
		<div>
			<Wrapper>
				<Navigator />
				<Milestones />
			</Wrapper>
		</div>
	);
};

export default MilestonesPage;

const Wrapper = styled.div``;
