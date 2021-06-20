export type LabelSwitchType = {
  id?: number;
  name: string;
  color: string;
  description: string;
}

export type LabelItemType = LabelSwitchType & {
  setToggleLabel: any;
}