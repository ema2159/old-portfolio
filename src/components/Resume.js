import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PDF from "react-pdf-js";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PDF
        scale={2}
	file="resume.pdf"
        page={1}
      />
    </div>
  );
};

export default Resume;
