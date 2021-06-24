import { LabelItemType } from 'types/issueType';
import { MilestonesItemLeftProps } from 'types/issueType';
type labelReducerAction =
  | { type: 'Title'; payload: string }
  | { type: 'Description'; payload: string }
  | { type: 'LabelColor'; payload: string }
  | { type: 'TextColor'; payload: 'dark' | 'light' };

export function labelReducer(state: LabelItemType, action: labelReducerAction): LabelItemType {
  switch (action.type) {
    case 'Title':
      return {
        ...state,
        title: action.payload,
      };
    case 'Description':
      return {
        ...state,
        description: action.payload,
      };
    case 'LabelColor':
      return {
        ...state,
        labelColor: action.payload,
      };
    case 'TextColor':
      return {
        ...state,
        textColor: action.payload,
      };
  }
}
type milestoneReducerAction =
  | { type: 'Title'; payload: string }
  | { type: 'Description'; payload: string }
  | { type: 'DueDate'; payload: string }


export function milestoneReducer(state: MilestonesItemLeftProps, action: milestoneReducerAction): MilestonesItemLeftProps {
  switch (action.type) {
    case 'Title':
      return {
        ...state,
        title: action.payload,
      };
    case 'Description':
      return {
        ...state,
        description: action.payload,
      };
    case 'DueDate':
      return {
        ...state,
        dueDate: action.payload,
      };
  }
}