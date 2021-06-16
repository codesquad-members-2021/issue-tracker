import ButtonGroup from "components/common/ButtonGroup";
import AddButton from "components/common/AddButton";
import { Link } from "react-router-dom";
const MenuTab = () => {
	return (
		<div>
			<ButtonGroup milestoneCount={0} labelCount={0} />
			<Link to="main/new">
				<AddButton text={"이슈 작성"} />
			</Link>
		</div>
	);
};

export default MenuTab;
