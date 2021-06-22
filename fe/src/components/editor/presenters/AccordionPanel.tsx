import React from "react";
import { Chip, Typography, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { useStyles } from "../styles/useStyles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useRecoilValue } from "recoil";
import { temporalRefState } from "utils/states";
import { ListItemsType, TemporalRefStateType } from "utils/interface";
import { List, ListItem } from "../styles/Editor.style";

interface AccordionPanelProps {
  expandedValue: string;
  expanded: false | string;
  handleChange: (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
  handleDelete: (id: string | number, key: keyof TemporalRefStateType) => () => void;
  handleClickToSelect: (
    id: string | number,
    title: string,
    key: keyof TemporalRefStateType
  ) => () => void;
  temporalArray: ListItemsType[];
  keyName: keyof TemporalRefStateType;
}

const TITLE = {
  assignees: "담당자",
  milestones: "마일스톤",
  labels: "레이블",
};

function AccordionPanel(props: AccordionPanelProps) {
  const classes = useStyles();
  const temporalState = useRecoilValue(temporalRefState);
  const {
    expandedValue,
    expanded,
    handleChange,
    handleDelete,
    handleClickToSelect,
    temporalArray,
    keyName,
  } = props;

  return (
    <Accordion expanded={expanded === expandedValue} onChange={handleChange(expandedValue)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={classes.accordionHeading}>{TITLE[keyName]}</Typography>
        <Typography className={classes.accordionSecondaryHeading}>
          {temporalState[keyName].map((item) => (
            <Chip
              variant="outlined"
              size="small"
              label={item.title}
              onDelete={handleDelete(item.id, keyName)}
            />
          ))}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetail}>
        {temporalArray.map((item) => (
          <List onClick={handleClickToSelect(item.id, item.title, keyName)}>
            <ListItem>({item.id})</ListItem>
            <ListItem>{item.title}</ListItem>
          </List>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionPanel;
