import {
  IssueRefMenuProps,
  SimpleAppBarProps,
  UsefulObjectType,
  ListItemsType,
} from "utils/interface";
import { useRecoilState } from "recoil";
import IssueAppBarPresenter from "./IssueAppBar.presenter";
import { openState, closeState } from "utils/states";
import { milestones } from "data/milestone";
import { labels } from "data/label";
// interface IssueAppBarContainerProps extends SimpleAppBarProps {
//   assignees: string[];
//   authors: string[];
//   milestones: string[]; // type 객체 하나 만들어서 변경하기
//   labelList: string[];
// }

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
      // myAssignees.map((assignee) => ({
      //   id: assignee,
      //   title: assignee,
      // })),
    },
    {
      buttonTitle: "label",
      listItems: labels.data.map((label) => ({ id: label.id, title: label.title })),
      // [
      //   { id: 0, title: "fe" },
      //   { id: 1, title: "be" },
      //   { id: 2, title: "ios" },
      // ],
    },
    {
      buttonTitle: "milestone",
      listItems: milestones.data.map((mile) => ({ id: mile.id, title: mile.title })),
      // [
      //   { id: 0, title: "마스터즈코스" },
      //   { id: 1, title: "프론트엔드" },
      //   { id: 2, title: "백엔드" },
      //   { id: 3, title: "모바일" },
      // ],
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
      // [...new Set(authors)].map((auth) => ({ id: auth, title: auth })),
    },
  ];

  return (
    <IssueAppBarPresenter
      {...{ openedIssue, closedIssue, showCloseIssue, showOpenIssue, issueRefArray }}
    />
  );
}
