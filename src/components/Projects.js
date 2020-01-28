import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

// Import file with projects info
const projectsJSON = require("../data/projects.json");
// Import projects images
const emacsImage = require("../img/emacs.png");
const reactImage = require("../img/react.png");

// Create styles
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    background: "#D8DEE9",
    width: "100%",
    height: "100%",
    overflow: "auto"
  },
  grid: {
    marginTop: "6%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  innerGrid: {
    width: "50vw"
  },
  paper: {
    height: "30vh",
    width: "23vw",
    display: "flex",
    borderRadius: "10px",
    flexGrow: 1,
    flexFlow: "column",
    alignItems: "center",
    background: "#172D35"
  },
  header: {
    position: "relative",
    width: "100%",
    height: "30%",
    background: "#F8F8F8",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    display: "flex",
    alignItems: "center"
  },
  title: {
    color: "#264653",
    marginLeft: "2%"
  },
  body: {
    height: "70%",
    textAlign: "center",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-around",
  },
  text: {
    fontFamily: "Open Sans",
    fontStyle: "bold",
    textAlign: "justify",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
    color: "#E0E0E0",
    fontSize: "calc(10px + 0.3vw)",
  },
  image: {
    height: "auto",
    width: "auto",
    maxWidth: "80%",
    maxHeight: "80%",
  },
  headerDivider: {
    borderTop: "2px dotted #E0E0E0",
    color: "#172D35",
    marginTop: "10px",
    width: "95%",
  },
  githubButton: {
    color: "#E0E0E0",
    borderColor: "#E0E0E0",
    width: "5vw",
    "&:hover": {
      borderColor: "#5E81AC",
      background: "#5E81AC",
    }
  }
}));

// Project objects
const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} item xs={12}>
	<Grid container className={classes.innerGrid} justify="center" spacing={1}>
	  {projectsJSON.map(project => (
	    <Grid key={project.id} item>
	      <Paper className={classes.paper}>
		<div className={classes.header}>
		  <img className={classes.image} src={eval(project.image)} />
		  <h1 className={classes.title}>{project.name}</h1>
		</div>
		<div className={classes.body}>
		  <div>
		    <Typography variant="body1" className={classes.text}>
		      {project.description}
		    </Typography>
		    <hr className={classes.headerDivider}/>
		  </div>
		  <div>
		    <Button
		      className={classes.githubButton}
		      variant="outlined"
		      color="primary"
		      size="medium"
		      href={project.github}
		      target="_blank" >
		      Github
		    </Button>
		  </div>
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
