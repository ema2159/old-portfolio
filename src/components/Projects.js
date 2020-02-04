import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";

// Import file with projects info
const projectsJSON = require("../data/projects.json");
// Import projects images
const emacsImage = require("../img/emacs.png");
const reactImage = require("../img/react.png");

// Styles
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
    marginTop: "12vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  innerGrid: {
    width: "90vw",
    justifyContent: "center",
    ["@media (max-width:1100px)"]: {
      width: "90vw",
      justifyContent: "center"
    }
  },
  paper: {
    height: "30vh",
    width: "23vw",
    display: "flex",
    borderRadius: "10px",
    flexGrow: 1,
    flexFlow: "column",
    alignItems: "center",
    background: "#F8F8F8",
    ["@media (max-width:780px)"]: {
      width: "60vw",
      justifyContent: "center"
    }
  },
  header: {
    position: "relative",
    width: "100%",
    height: "30%",
    background: "#172D35",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    display: "flex",
    alignItems: "center"
  },
  title: {
    color: "#F8F8F8",
    marginLeft: "2%",
    fontSize: "calc(10px + 1vw)"
  },
  body: {
    height: "70%",
    textAlign: "center",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
    overflow: "auto"
  },
  text: {
    textAlign: "justify",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
    marginBottom: "5%",
    color: "#264653",
    fontSize: "calc(10px + 0.3vw)",
    ["@media (max-width:780px)"]: {
      fontSize: "calc(12px + 0.3vw)"
    }
  },
  image: {
    height: "auto",
    width: "auto",
    marginLeft: "10px",
    maxWidth: "50%",
    maxHeight: "50%"
  },
  headerDivider: {
    border: 0,
    borderTop: "2px solid #264653",
    color: "#F8F8F8",
    marginTop: "10px",
    width: "70%"
  },
  buttonContainer: {
    marginBottom: "10px"
  },
  githubButton: {
    color: "#264653",
    borderColor: "#264653",
    width: "5vw",
    height: "4vh",
    fontSize: "calc(10px + 0.3vw)",
    "&:hover": {
      color: "#F8F8F8",
      borderColor: "#5E81AC",
      background: "#5E81AC"
    }
  }
}));

// Animations
const ProjectsAnimation = styled.div`
  --time: ${props => props.time};
  animation: var(--time) ${keyframes(fadeInRight)};
`;

// Main component
const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} item xs={12}>
        <Grid
          container
          className={classes.innerGrid}
          justify="center"
          spacing={2}
        >
          {projectsJSON.map((project, index) => (
            <Grid key={project.id} item>
              <ProjectsAnimation
                time={
                  index < 12
                    ? 0.5 + 0.2 * index + "s"
                    : index % 2
                    ? "2s"
                    : "1.8s"
                }
              >
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
                      <hr className={classes.headerDivider} />
                    </div>
                    <div className={classes.buttonContainer}>
                      <Button
                        className={classes.githubButton}
                        variant="outlined"
                        color="primary"
                        size="medium"
                        href={project.github}
                        target="_blank"
                      >
                        Github
                      </Button>
                    </div>
                  </div>
                </Paper>
              </ProjectsAnimation>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
