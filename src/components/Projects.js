import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

// Import file with projects info
const projectsJSON = require("../data/projects.json");
// Import projects background images
const emacsImage = require("../img/emacs.png");

// Create styles
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    background: "#D8DEE9",
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
  grid: {
    marginTop: "6%",
  },
  paper: {
    height: "30vh",
    width: "23vw",
    display: "flex",
    borderRadius: "10px",
    flexGrow: 1,
    flexFlow: "column",
    alignItems: "center",
    background: "#172D35",
  },
  header: {
    position: "relative",
    width: "100%",
    height: "30%",
    background: "#F8F8F8",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  title: {
    color: "#264653",
    marginLeft: "2%",
  },
  body: {
  },
  text: {
    textAlign: "justify",
    marginLeft: "5%",
    marginRight: "5%",
    color: "#E0E0E0"
  },
  image: {
    position: "relative",
    height: "auto", 
    width: "auto", 
    maxWidth: "80%", 
    maxHeight: "80%",
  },
}));

// Project objects
const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} item xs={12}>
        <Grid container justify="center" spacing={1}>
          {projectsJSON.map(project => (
            <Grid key={project.id} item>
              <Paper className={classes.paper}>
                <div className={classes.header}>
                  <h1 className={classes.title}>{project.name}</h1>
                  <img className={classes.image} src={emacsImage}/>
                </div>
                <div className={classes.body}>
                  <p className={classes.text}>
                    {project.description}
                  </p>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
