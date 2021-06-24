import styled from "styled-components";
import LabelBadge from "components/common/LabelBadge";
import { labelCategoryState } from "RecoilStore/Atoms";
import { useRecoilValue } from "recoil";
const Label = () => {
	const labelData = useRecoilValue(labelCategoryState);
	return (
		<>
			{labelData &&
				labelData.map((label, idx) => (
					<ContentsContainer key={`label-${idx}`}>
						<LabelBadge
							text={label.name}
							fontColor={label.textColor}
							backgroundColor={label.backgroundColor}
						/>
					</ContentsContainer>
				))}
		</>
	);
};

const ContentsContainer = styled.div`
	display: flex;
	padding: 9px 0;
`;

export default Label;
