import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ParticlesBackground from "./ParticlesBackground.js";
import { fade } from "@material-ui/core/styles/colorManipulator";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { Typography } from "@material-ui/core";

// Styles
const useStyles = makeStyles(theme => ({
  aboutMeRoot: {
    display: "flex",
    flexGrow: 1,
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
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
  headerDivider: {
    borderTop: "5px solid white",
    width: "60%",
    height: "5"
  },
  description: {
    textAlign: "justify",
    margin: "15px"
  },
  skills: {
    fontFamily: "serif",
    fontSize: "calc(10px + 0.5vw)",
    color: "white"
  },
  iconsContainer: {
    display: "flex"
  },
  aboutMeIcon: {
    "&:hover": {
      color: fade("#FFFFFF", 0.6)
    }
  }
}));

// Animations
const BoxAnimation = styled.div`
  animation: 0.5s ${keyframes(fadeIn)};
`;

// Main component
const AboutMe = () => {
  const classes = useStyles();
  const spacingVal = 2;

  return (
    <div className={classes.aboutMeRoot} spacing={spacingVal}>
      <ParticlesBackground />
      <BoxAnimation>
        <div className={classes.box}>
          <h1 className={classes.title}>Electrical and Software Engineer</h1>
          <hr className={classes.headerDivider} />
          <Typography variant="body1" className={classes.description}>
            I'm an electrical engineer specialized in computers and networks
            graduated with honors from the University Of Costa Rica. I'm
            interested in areas like machine learning, web development, embedded
            software development, mathematics and physics among others. I tend
            to learn quickly and I'm constantly working on improving and
            updating my skills.
          </Typography>
          <p className={classes.skills}>
            Python | Pandas | Tensorflow | Scikit-Learn | Linux | C++ | C |
            Verilog | React
          </p>
          <div className={classes.iconsContainer}>
            <IconButton
              className={classes.aboutMeIcon}
              color="inherit"
              size="medium"
              href="https://github.com/ema2159"
              target="_blank"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              className={classes.aboutMeIcon}
              color="inherit"
              size="medium"
              href="https://www.linkedin.com/in/emmanuel-bustos-3b8a48129/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </BoxAnimation>
    </div>
  );
};

export default AboutMe;
