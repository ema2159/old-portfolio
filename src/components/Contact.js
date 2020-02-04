import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import TrinityRingsSpinner from "@bit/bondz.react-epic-spinners.trinity-rings-spinner";
import styled, { keyframes } from "styled-components";
import { bounceInLeft, bounceInRight } from "react-animations";

// Colors declaration
const colors = { primary: "#D8DEE9", secondary: "#152931" };

// Styles
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    height: "100%",
    ["@media (max-width:1100px)"]: {
      flexFlow: "column"
    }
  },
  left: {
    display: "flex",
    width: "50vw",
    justifyContent: "center",
    alignItems: "center",
    background: colors.primary,
    ["@media (max-width:1100px)"]: {
      height: "50vh",
      width: "100vw"
    }
  },
  leftContainer: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: "15px",
    height: "40vh",
    width: "30vw",
    background: colors.secondary,
    transition: "0.2s",
    "&:hover": {
      transition: "0.2s",
      transform: "translateX(2vw)"
    },
    ["@media (max-width:1100px)"]: {
      height: "30vh",
      width: "70vw"
    }
  },
  headerContainer: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center"
  },
  name: {
    color: colors.primary,
    fontSize: "1.8vw",
    marginBottom: 0,
    textAlign: "center",
    ["@media (max-width:1100px)"]: {
      fontSize: "calc(12px + 0.7vw)"
    }
  },
  headerDividerLeft: {
    border: 0,
    borderTop: `5px dotted ${colors.primary}`,
    marginBottom: 0,
    ["@media (max-width:312px)"]: {
      marginTop: "15px"
    },
    width: "60%",
    height: "5"
  },
  description: {
    color: colors.primary,
    textAlign: "justify",
    width: "80%",
    fontSize: "calc(8px + 0.5vw)",
    marginBottom: 0,
    ["@media (max-width:1100px)"]: {
      fontSize: "calc(10px + 0.4vw)"
    }
  },
  rings: {
    ["@media (max-width:1100px)"]: {
      transform: "scale(0.6)"
    }
  },
  right: {
    display: "flex",
    width: "50vw",
    justifyContent: "center",
    alignItems: "center",
    background: colors.secondary,
    ["@media (max-width:1100px)"]: {
      height: "50vh",
      width: "100vw"
    }
  },
  rightContainer: {
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-start",
    borderRadius: "15px",
    height: "40vh",
    width: "30vw",
    background: colors.primary,
    transition: "0.2s",
    "&:hover": {
      transition: "0.2s",
      transform: "translateX(-2vw)"
    },
    ["@media (max-width:1100px)"]: {
      height: "30vh",
      width: "70vw"
    }
  },
  contactMe: {
    width: "100%",
    fontSize: "2vw",
    color: colors.secondary,
    marginBottom: 0,
    textAlign: "center",
    ["@media (max-width:1100px)"]: {
      fontSize: "calc(12px + 0.7vw)"
    }
  },
  headerDividerRight: {
    border: 0,
    borderTop: `5px dotted ${colors.secondary}`,
    ["@media (max-width:312px)"]: {
      marginTop: "15px"
    },
    width: "60%",
    height: "5"
  },
  list: {
    marginLeft: "7%"
  },
  listItemIcon: {
    minWidth: "30px",
    marginRight: "1vw"
  },
  listIcon: {
    color: colors.secondary,
    fontSize: "calc(20px + 0.8vw)",
    ["@media (max-width:1100px)"]: {
      fontSize: "calc(25px + 0.4vw)"
    }
  },
  listText: {
    color: colors.secondary,
    fontSize: "calc(12px + 0.5vw)",
    ["@media (max-width:1100px)"]: {
      fontSize: "calc(10px + 0.4vw)"
    }
  }
}));

// Animations
const SlideLeftAnim = styled.div`
  animation: 0.5s ${keyframes(bounceInLeft)};
`;
const SlideRightAnim = styled.div`
  animation: 0.5s ${keyframes(bounceInRight)};
`;

// Main component
const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <SlideLeftAnim>
          <div className={classes.leftContainer}>
            <div className={classes.headerContainer}>
              <h1 className={classes.name}>Emmanuel Bustos Torres</h1>
              <hr className={classes.headerDividerLeft} />
              <h4 className={classes.description}>
                I'm a young engineer who loves to learn and to build stuff. If
                you need anything from me, send me an email and I'll be glad to
                help you!
              </h4>
            </div>
            <div className={classes.rings}>
              <TrinityRingsSpinner
                color={colors.primary}
                size="100"
                animationDuration="1000"
              />
            </div>
          </div>
        </SlideLeftAnim>
      </div>
      <div className={classes.right}>
        <SlideRightAnim>
          <div className={classes.rightContainer}>
            <h1 className={classes.contactMe}>Contact Me</h1>
            <hr className={classes.headerDividerRight} />
            <List className={classes.list}>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <PhoneAndroidIcon className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText>
                  <p className={classes.listText}>(+506) 8730-9726</p>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <MailIcon className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText className={classes.listText}>
                  <p className={classes.listText}>ema2159@gmail.com</p>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </SlideRightAnim>
      </div>
    </div>
  );
};

export default Contact;
