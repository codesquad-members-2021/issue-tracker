import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
        height: "fit-content",
      },
    },
    paper: {
      padding: "2em",
    },
    title: {
      width: "100%",
    },
    content: {
      width: "100%",
    },
    accordionHeading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    accordionSecondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    accordionDetail: {
      display: "inline-block",
    },
  })
);
