import { IssueRefStateType, IssueType, UsefulObjectType } from "utils/interface";
import { Card, CardContent, makeStyles, Link, Chip } from "@material-ui/core";
import CheckBox from "./styles/CheckBox";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectionState } from "utils/states";

interface IssueTableType {
  issueListItems: IssueType[];
}

export default function IssueTable({ issueListItems }: IssueTableType) {
  const classes = useStyles();

  const selectState = useRecoilValue(selectionState);

  // console.log(issueListItems);
  // console.log(selectState);
  // issueListItems = getFilteredListItems(issueListItems, selectState);

  return (
    <div>
      {issueListItems.map((item) => (
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.card}>
            <CheckBox />
            <CardContentInfo>
              <CardHeader>
                <Link href={`/${item.id}`} className={classes.title}>
                  {item.title}
                </Link>
                {item.label_list.map((label) => (
                  <Badge color={label.color}>{label.title}</Badge>
                  // <Chip className={classes.chip} color="primary" size="small" label={label.title} />
                ))}
              </CardHeader>
              <CardFooter>
                <span>
                  #{item.id} 이 이슈가 {item.created_at}에 {item.author.name}님에 의해
                  작성되었습니다.
                </span>
                <span>{item.milestone.title}</span>
              </CardFooter>
            </CardContentInfo>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const Badge = styled.span`
  border: 1px solid ${({ color }) => `#${color}`};
  padding: 2px;
  border-radius: 5px;
`;

// function getFilteredListItems(issueListItems: IssueType[], selectState: IssueRefStateType) {
//   const { assignee, author, milestone, label } = selectState;
//   const result = issueListItems.filter((item) => {
//     const Iassignee = item.assignee.user_id;
//     const Iauthor = item.author.user_id;
//     const Imilestone = item.milestone.milestone_id;
//     const Ilabel = item.label_list.map((lab) => lab.id);

//   });
//   return result;
// }

// function calculteTime(created_at: string) {
//   const current = new Date().getTime();
//   const created = new Date(created_at).getTime();
//   const sec_gap = (current - created) / 1000;
//   const min_gap = (current - created) / 1000 / 60;
//   console.log(sec_gap, min_gap);
// }

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "0 2px",
  },
  card: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  chip: {
    margin: "0 3px",
  },
});

const CardContentInfo = styled.div``;

const CardHeader = styled.div``;

const CardFooter = styled.div`
  span {
    margin-right: 10px;
  }
`;
