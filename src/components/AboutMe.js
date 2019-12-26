import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ParticlesBackground from "./ParticlesBackground.js";

const useStyles = makeStyles(theme => ({
  aboutMeRoot: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  card: {
    minWidth: 275,
    position: "absolute",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
    color: "white",
    opacity: 1
  },
  cover: {
    width: 151,
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  const spacingVal = 2;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.aboutMeRoot} spacing={spacingVal}>
      <ParticlesBackground />
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default AboutMe;
