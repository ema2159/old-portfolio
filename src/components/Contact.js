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

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    height: "100%",
    ['@media (max-width:1100px)']: {
      flexFlow: "column"
    },
  },
  left: {
    display: "flex",
    width: "50vw",
    justifyContent: "center",
    alignItems: "center",
    background: "#152931",
    ['@media (max-width:1100px)']: {
      height: "50vh",
      width: "100vw",
    },
  },
  leftContainer: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    borderRadius: "15px",
    height: "40%",
    width: "66%",
    background: "#edefff",
    transition: "0.2s",
    "&:hover": {
      transition: "0.2s",
      transform: "translateX(2vw)"
    },
    ['@media (max-width:1100px)']: {
      height: "60%",
      width: "70%",
    },
  },
  name: {
    color: "#152931",
    fontSize: "1.8vw",
    marginBottom: 0,
    textAlign: "center",
    ['@media (max-width:1100px)']: {
      fontSize: "calc(12px + 0.7vw)",
    },
  },
  headerDividerLeft: {
    border: 0,
    borderTop: "5px dotted #152931",
    marginBottom: 0,
    ["@media (max-width:312px)"]: {
      marginTop: "15px"
    },
    width: "60%",
    height: "5"
  },
  description: {
    color: "#152931",
    textAlign: "justify",
    width: "80%",
    fontSize: "calc(8px + 0.5vw)",
    ['@media (max-width:1100px)']: {
      fontSize: "calc(10px + 0.4vw)",
    },
  },
  right: {
    display: "flex",
    width: "50vw",
    justifyContent: "center",
    alignItems: "center",
    background: "#edefff",
    ['@media (max-width:1100px)']: {
      height: "50vh",
      width: "100vw",
    },
  },
  rightContainer: {
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-start",
    borderRadius: "15px",
    height: "40%",
    width: "60%",
    background: "#152931",
    transition: "0.2s",
    "&:hover": {
      transition: "0.2s",
      transform: "translateX(-2vw)"
    },
    ['@media (max-width:1100px)']: {
      height: "60%",
      width: "70%",
    },
  },
  contactMe: {
    width: "100%",
    fontSize: "2vw",
    color: "#D8DEE9",
    marginBottom: 0,
    textAlign: "center",
    ['@media (max-width:1100px)']: {
      fontSize: "calc(12px + 0.7vw)",
    },
  },
  headerDividerRight: {
    border: 0,
    borderTop: "5px dotted #D8DEE9",
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
    marginRight: "1vw",
  },
  listIcon: {
    color: "#D8DEE9",
    fontSize: "calc(20px + 0.8vw)",
    ['@media (max-width:1100px)']: {
      fontSize: "calc(25px + 0.4vw)",
    },
  },
  listText: {
    color: "#D8DEE9",
    fontSize: "calc(12px + 0.5vw)",
    ['@media (max-width:1100px)']: {
      fontSize: "calc(10px + 0.4vw)",
    },
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.leftContainer}>
          <h1 className={classes.name}>Emmanuel Bustos Torres</h1>
          <hr className={classes.headerDividerLeft} />
          <h4 className={classes.description}>
            I'm a young engineer who loves to learn and to build stuff. If you
            need anything from me, send me an email and I'll be glad to help
            you!
          </h4>
          <TrinityRingsSpinner
            color="#152931"
            size="100"
            animationDuration="1000"
          />
        </div>
      </div>
      <div className={classes.right}>
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
      </div>
    </div>
  );
};

export default Contact;
