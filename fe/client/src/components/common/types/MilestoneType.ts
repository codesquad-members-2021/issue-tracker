export type MilestoneSwitchType = {
  milestoneItem: {
    closed: boolean;
    closedIssueCount: number;
    description: string;
    dueDate: string;
    id: number;
    name: string;
    openedIssueCount: number;
  }
}

export type MilestoneItemType = MilestoneSwitchType & {
  setToggleMilestone: any;
}