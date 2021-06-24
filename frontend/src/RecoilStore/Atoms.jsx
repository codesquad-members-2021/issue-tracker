import { atom, selector } from "recoil";
import { CATEGORY } from "data";
export const selectedIssueCntState = atom({
	key: "selectedIssueCntState",
	default: 0,
});

export const clickedFilterState = atom({
	key: "clickedFilterState",
	default: null,
});

export const filterBarInputState = atom({
	key: "filterBarInputState",
	default: {
		placeholder: "is:issue is:open",
		assignee: null,
		label: null,
		milestone: null,
		author: null,
		issue: null,
	},
});

export const labelButtonFlagState = atom({
	key: "labelButtonFlagState",
	default: true,
});

export const milestoneButtonFlagState = atom({
	key: "milestoneButtonFlag",
	default: false,
});

export const milestoneAddButtonFlagState = atom({
	key: "milestoneAddButtonFlagState",
	default: false,
});

export const milestoneUpdateState = atom({
	key: "milestoneAddButtonFlagState",
	default: false,
});

export const labelInitialData = atom({
	key: "labelInitialData",
	default: null,
});
export const labelAddButtonFlagState = atom({
	key: "labelAddButtonFlagState",
	default: false,
});

export const labelEditButtonFlagState = atom({
	key: "labelEditButtonFlagState",
	default: false,
});

export const navigatorAddButtonFlagState = atom({
	key: "navigatorAddButtonFlagState",
	default: false,
});

export const milestoneCountState = atom({
	key: "milestoneCountState",
	default: 0,
});

export const labelCountState = atom({
	key: "labelCountState",
	default: 0,
});

export const assigneeCategoryState = atom({
	key: "assigneeCategoryState",
	default: [],
});

export const labelCategoryState = atom({
	key: "labelCategoryState",
	default: [],
});

export const milestoneCategoryState = atom({
	key: "milestoneCategoryState",
	default: {},
});

export const commentInputState = atom({
	key: "commentInputState",
	default: {
		issueId: null,
		content: "",
	},
});

export const categoryIdSelectorState = selector({
	key: "categoryIdSelectorState",
	get: ({ get }) => {
		const assignee = get(assigneeCategoryState).map(el => el.id);
		const label = get(labelCategoryState).map(el => el.id);
		const milestone = get(milestoneCategoryState).id;

		return {
			assignee: assignee,
			label: label,
			milestone: milestone,
		};
	},
});

//아래는 데이지 삽질 망한 결과입니다.---나중에 꼭 뜯어보리라..
export const categorySelector = selector({
	key: "categorySelector",
	get: ({ get }) => {
		const assignee = get(assigneeCategoryState);
		const label = get(labelCategoryState);
		const milestone = get(milestoneCategoryState);
		return { assignee: assignee, label: label, milestone: milestone };
	},
	set: ({ set }, { category, payload }) => {
		switch (category) {
			case CATEGORY.ASSIGNEE:
				set(assigneeCategoryState, prevState => [
					...prevState,
					{
						id: payload.id,
						githubId: payload.githubId,
						imageUrl: payload.imageUrl,
					},
				]);
			case CATEGORY.LABEL:
				set(labelCategoryState, prevState => [
					...prevState,
					{
						id: payload.id,
						name: payload.name,
						textColor: payload.colors.textColor,
						backgroundColor: payload.colors.backgroundColor,
					},
				]);
			case CATEGORY.MILESTONE:
				set(milestoneCategoryState, prevState => [
					{
						id: payload.id,
						title: payload.title,
						dueDate: payload.dueDate,
					},
				]);
		}
	},
});
