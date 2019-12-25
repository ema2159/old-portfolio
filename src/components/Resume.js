import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  ResumeRoot: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  h1Stuff: {
    top: '100px',
    left: '100%',
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.ResumeRoot}>
      <h1 className={classes.h1Stuff}>Resume</h1>
    </div>
  );
};

export default Resume;
