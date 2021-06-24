import styled from "styled-components";
import LabelBadge from "components/common/LabelBadge";
import { labelCategoryState } from "RecoilStore/Atoms";
import { useRecoilValue } from "recoil";
const Label = () => {
	//리코일(선택된 라벨)
	const labelData = useRecoilValue(labelCategoryState);
	console.log("labelData", labelData);
	return (
		<>
			{labelData &&
				labelData.map((label, idx) => (
					<ContentsContainer key={`label-${idx}`}>
						<LabelBadge
							text={label.name}
							fontColor={"white"}
							backgroundColor={"black"}
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
