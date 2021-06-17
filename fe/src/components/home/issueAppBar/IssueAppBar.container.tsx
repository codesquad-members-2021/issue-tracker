import { IssueRefMenuProps, SimpleAppBarProps } from "utils/interface";
import { useRecoilState } from "recoil";
import IssueAppBarPresenter from "./IssueAppBar.presenter";
import { openState, closeState } from "utils/states";
import { milestones } from "data/milestone";
import { labels } from "data/label";

export default function IssueAppBarContainer(props: SimpleAppBarProps) {
  const { openedIssue, closedIssue } = props;
  const [, setOpen] = useRecoilState(openState);
  const [, setClose] = useRecoilState(closeState);

  const showOpenIssue = () => {
    setClose(false);
    setOpen(true);
  };

  const showCloseIssue = () => {
    setOpen(false);
    setClose(true);
  };

  const issueRefArray: IssueRefMenuProps[] = [
    {
      buttonTitle: "assignee",
      listItems: [
        { id: "adelakim5", title: "Adela" },
        { id: "bibi6666667", title: "Bibi" },
        { id: "cchoongh", title: "Neis" },
        { id: "zzisun", title: "V" },
        { id: "jihye-woo", title: "Woody" },
      ],
    },
    {
      buttonTitle: "label",
      listItems: labels.data.map((label) => ({ id: label.id, title: label.title })),
    },
    {
      buttonTitle: "milestone",
      listItems: milestones.data.map((mile) => ({ id: mile.id, title: mile.title })),
    },
    {
      buttonTitle: "author",
      listItems: [
        { id: "adelakim5", title: "Adela" },
        { id: "bibi6666667", title: "Bibi" },
        { id: "cchoongh", title: "Neis" },
        { id: "zzisun", title: "V" },
        { id: "jihye-woo", title: "Woody" },
      ],
    },
  ];

  return (
    <IssueAppBarPresenter
      {...{ openedIssue, closedIssue, showCloseIssue, showOpenIssue, issueRefArray }}
    />
  );
}
