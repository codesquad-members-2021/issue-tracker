import React, { useEffect } from "react";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { IssueType } from "utils/interface";
import { Button, Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
import CheckBox from "./styles/CheckBox";
import { selector, useRecoilState, useRecoilValue, atom } from "recoil";
import { selectIssueAll } from "utils/states";
import CardItem from "./styles/CardItem";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "#", width: 100 },
//   { field: "title", headerName: "제목", width: 100 },
//   { field: "assignee", headerName: "담당자", width: 150 },
//   { field: "label", headerName: "레이블", width: 150 },
//   { field: "milestone", headerName: "마일스톤", width: 150 },
//   { field: "author", headerName: "작성자", width: 150 },
//   { field: "created_at", headerName: "작성한 시간", width: 150 },
// ];

// const rows = [
//   { id: 1, assignee: "adelakim5", author: "adelakim5" },
//   { id: 2, assignee: "adelakim5", author: "adelakim5" },
//   { id: 3, assignee: "adelakim5", author: "adelakim5" },
//   { id: 4, assignee: "adelakim5", author: "adelakim5" },
//   { id: 5, assignee: "adelakim5", author: "adelakim5" },
//   { id: 6, assignee: "adelakim5", author: "adelakim5" },
//   { id: 7, assignee: "adelakim5", author: "adelakim5" },
//   { id: 8, assignee: "adelakim5", author: "adelakim5" },
//   { id: 9, assignee: "adelakim5", author: "adelakim5" },
// ];

interface IssueTableType {
  issueListItems: IssueType[];
}

export default function IssueTable({ issueListItems }: IssueTableType) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      {issueListItems.map((item) => (
        <Card className={classes.root} variant="outlined">
          <CheckBox />
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        /* <Card className={classes.root}>
          <CheckBox
            checked={selectedIssueAllState || checkState}
            name={`${item.id}`}
            onChange={handleChange}
          />
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card> */
      ))}
    </div>

    // <div>
    //   {issueListItems.map((item) => (
    //     <Card>{item.title}</Card>
    //   ))}
    // </div>
  );
  // <div style={{ height: 400, width: "100%" }}>
  //   <DataGrid rows={rows} columns={columns} pageSize={5}></DataGrid>
  // </div>
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
