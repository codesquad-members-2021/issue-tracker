import styled from "styled-components";
import Navigator from "components/common/Navigator";
import Labels from "components/Labels/Labels";

const LabelsPage = () => {
	return (
		<Wrapper>
			<Navigator />
			<Labels />
		</Wrapper>
	);
};

export default LabelsPage;

const Wrapper = styled.div``;
