import { IssueRefStateType, IssueType, UsefulObjectType } from "utils/interface";
import { Card, CardContent, makeStyles, Link, Chip } from "@material-ui/core";
import CheckBox from "./styles/CheckBox";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { currDetailState, refFileterState } from "utils/states";

interface IssueTableType {
  issueListItems: IssueType[];
}

export default function IssueTable({ issueListItems }: IssueTableType) {
  const classes = useStyles();

  const refState = useRecoilValue(refFileterState);
  const [currDetail, setCurrDetail] = useRecoilState(currDetailState);

  // TODO: TS를 적용하여 Object.entries, for of 문을 잘 사용하는 방법 좀 더 공부하기
  // let filteredIssueListItems = [...issueListItems];
  // for (let [key, value] of Object.entries(refState)) {
  //   // filteredIssueListItems = filteredIssueListItems.filter((item) => );
  // }
  // // console.log(issueListItems);

  return (
    <div>
      {issueListItems.map((item) => (
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.card}>
            <CheckBox id={item.id} />
            <CardContentInfo>
              <CardHeader>
                <Link
                  href={`/detail/${item.id}`}
                  onClick={() => setCurrDetail(item.id)}
                  className={classes.title}
                >
                  {item.title}
                </Link>
                {item.label_list.map((label) => (
                  <Chip
                    className={classes.chip}
                    style={{ backgroundColor: label.color }}
                    size="small"
                    label={label.title}
                  />
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
