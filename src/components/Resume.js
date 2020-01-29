import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PDF from "react-pdf-js";

const resume = require("../data/resume.pdf");

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginTop: "5%",
    marginBottom: "2%"
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PDF
        scale={2}
        file={resume}
        page={1}
      />
    </div>
  );
};

export default Resume;
