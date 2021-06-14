import ButtonGroup from "components/common/ButtonGroup";
import AddButton from "components/common/AddButton";
const MenuTab = () => {
	return (
		<div>
			<ButtonGroup milestoneCount={0} labelCount={0} />
			<AddButton text={"이슈 작성"} />
		</div>
	);
};

export default MenuTab;
