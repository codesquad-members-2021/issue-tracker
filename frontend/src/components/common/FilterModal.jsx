import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useState } from "react";
import styled from "styled-components";
const data = [
	"열린 이슈",
	"내가 작성한 이슈",
	"나에게 할당한 이슈",
	"나에게 할당된 이슈",
	"내가 댓글을 남긴 이슈",
	"닫힌 이슈",
];
//디자인 수정 필요
const FilterModal = () => {
	const [value, setValue] = useState("female");

	const handleChange = event => {
		setValue(event.target.value);
		console.log(event.target.value);
	};

	return (
		<FilterModalLayout className="filter-modal">
			<FormControl component="fieldset">
				<FormLabel component="legend">이슈 필터</FormLabel>
				<RadioGroup
					aria-label="issue"
					name="issue"
					value={value}
					onChange={handleChange}
				>
					{data.map(x => (
						<FilterControlLabel
							value={x}
							control={<Radio color="black" />}
							label={x}
							labelPlacement="start"
						/>
					))}
				</RadioGroup>
			</FormControl>
		</FilterModalLayout>
	);
};
const FilterModalLayout = styled.div`
	position: absolute;
	top: 100%;
	background-color: white;
	text-align: left;
`;

const FilterControlLabel = styled(FormControlLabel)`
	display: flex;
	justify-content: space-between;
	margin: 0;
`;

export default FilterModal;
