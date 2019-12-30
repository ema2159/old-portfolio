import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@material-ui/core/Typography";
import ParticlesBackground from "./ParticlesBackground.js";
import avatar from "../img/avatar.png";

const useStyles = makeStyles(theme => ({
  aboutMeRoot: {
    display: "flex",
    flexGrow: 1,
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 14
  },
  box: {
    position: "relative",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    borderRadius: "15px",
    minHeight: "37vh",
    width: "50vw",
    color: "white",
    background: "black",
    opacity: 0.8
  },
  avatar: {
    position: "relative",
    width: "10vw",
    height: "10vw"
  },
  title: {
    maxHeight: "3vh",
    fontSize: "3vw",
    color: "white"
  },
  header: {
    borderTop: "5px solid white",
    width: "60%",
    height: "5"
  },
  description: {
    textAlign: "center"
  },
  skills: {
    fontFamily: "serif",
    fontSize: "1vw",
    color: "white"
  },
  iconsContainer: {
    display: "flex"
  }
}));

const AboutMe = () => {
  const classes = useStyles();
  const spacingVal = 2;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.aboutMeRoot} spacing={spacingVal}>
      <ParticlesBackground />
      <img src={avatar} className={classes.avatar} />
      <div className={classes.box}>
        <h1 className={classes.title}>Electrical and Software Engineer</h1>
        <hr className={classes.header} />
        <p className={classes.description}>
          I'm an electrical engineer specialized in computers and networks
          graduated with honors from the University Of Costa Rica. I'm
          interested in areas like machine learning, web development, embedded
          software development, mathematics and physics among others. I tend to
          learn quickly and I'm constantly working on improving and updating my
          skills.
        </p>
        <p className={classes.skills}>
          Python | Pandas | Tensorflow | Scikit-Learn | Linux | C++ | C |
          Verilog
        </p>
        <div className={classes.iconsContainer}>
          <IconButton
            color="inherit"
            size="medium"
            aria-label="delete"
            href="https://github.com/ema2159"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="inherit"
            size="medium"
            aria-label="delete"
            href="https://www.linkedin.com/in/emmanuel-bustos-3b8a48129/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
