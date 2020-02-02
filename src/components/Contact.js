import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    height: "100%",
  },
  left: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    background: "#D8DEE9",
  },
  leftContainer: {
    height: "40vh"
  },
  name: {
    color: "#3B4252",
  },
  right: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    background: "#3B4252",
  },
  leftContainer: {
    height: "40vh"
  },
  contactMe: {
    color: "#D8DEE9",
  },
}));

const Contact = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.leftContainer}>
          <Typography variant="h3" className={classes.name}>
            Emmanuel Bustos Torres
          </Typography>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.rightContainer}>
          <Typography variant="h3" className={classes.contactMe}>
            Contact Me
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Contact;
