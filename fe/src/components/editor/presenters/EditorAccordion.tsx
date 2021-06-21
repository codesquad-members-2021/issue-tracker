import React from "react";
import {
  Grid,
  Chip,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "../styles/useStyles";
import { labels } from "data/label";
import { milestones } from "data/milestone";
import { assiginees, authors } from "data/people";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { EditorRefsType } from "utils/interface";

export default function EditorAccordion({ assigneesRef, milestoneRef, labelsRef }: EditorRefsType) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [temporalState, setTemporalState] = useState({
    assignees: ["adelakim5"],
    milestone: "[FE] 이슈관리",
    labels: ["FE"],
  });

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const handleClickToAssign = (kind: keyof typeof temporalState, value: string) => {
  //   // const value =
  //   const totalValue = kind === "milestone" ? value : [...temporalState[kind]].concat(value);
  //   setTemporalState({
  //     ...temporalState,
  //     [kind]: totalValue,
  //   });
  // };

  return (
    <Grid item xs={3}>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.accordionHeading}>담당자</Typography>
          <Typography className={classes.accordionSecondaryHeading}>
            {temporalState.assignees.map((assignee) => (
              <Chip label={assignee} />
            ))}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetail}>
          {assiginees.map((assignee) => (
            <Chip
              // onClick={() => handleClickToAssign("assignees", assignee.id)}
              label={assignee.id}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.accordionHeading}>마일스톤</Typography>
          <Typography className={classes.accordionSecondaryHeading}>
            <Chip label={temporalState.milestone} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography> */}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.accordionHeading}>레이블</Typography>
          <Typography className={classes.accordionSecondaryHeading}>
            {temporalState.labels.map((label) => (
              <Chip label={label} />
            ))}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
