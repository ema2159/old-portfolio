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
    flexGrow: 1,
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${emacsImage})`,
    backgroundPosition: "center", 
    backgroundSize: "cover", 
    backgroundRepeat: "no-repeat",
  }
}));

// Project objects
const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} item xs={12}>
        <Grid container justify="center" spacing={2}>
          {projectsJSON.map(project => (
            <Grid key={project.id} item>
              <Paper className={classes.paper}>
                <h1>{project.name}</h1>
                <p style={{ textAlign: "justify", margin: "10px" }}>
                  {project.description}
                </p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
