import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { labels } from "data/label";
import { milestones } from "data/milestone";
import { assiginees } from "data/people";
import { useRecoilState } from "recoil";
import { EditorRefsType } from "utils/interface";
import { temporalRefState } from "utils/states";
import AccordionPanel from "./AccordionPanel";

export default function EditorAccordion({ assigneesRef, milestoneRef, labelsRef }: EditorRefsType) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [temporalState, setTemporalState] = useRecoilState(temporalRefState);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickToSelect =
    (id: string | number, title: string, key: keyof typeof temporalState) => () => {
      const newList = [...temporalState[key]];
      if (!newList.length || !newList.filter((item) => item.id === id).length)
        newList.push({ id, title });
      setTemporalState({
        ...temporalState,
        [key]: newList,
      });
    };

  const handleDelete = (id: string | number, key: keyof typeof temporalState) => () => {
    const newList = [...temporalState[key]].filter((item) => item.id !== id);
    setTemporalState({
      ...temporalState,
      [key]: newList,
    });
  };

  return (
    <Grid item xs={3}>
      <AccordionPanel
        {...{ expanded, handleChange, handleDelete, handleClickToSelect }}
        keyName="assignees"
        temporalArray={assiginees}
        expandedValue="panel1"
      />
      <AccordionPanel
        {...{ expanded, handleChange, handleDelete, handleClickToSelect }}
        keyName="milestones"
        temporalArray={milestones.data}
        expandedValue="panel2"
      />
      <AccordionPanel
        {...{ expanded, handleChange, handleDelete, handleClickToSelect }}
        keyName="labels"
        temporalArray={labels.data}
        expandedValue="panel3"
      />
    </Grid>
  );
}
