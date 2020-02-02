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
    background: "#D8DEE9",
  },
  rightContainer: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    borderRadius: "15px",
    height: "40%",
    width: "80%",
    background: "#152931",
    transition: "0.2s",
    "&:hover": {
      transition: "0.2s",
      transform: "translateX(-2vw)"
    }
  },
  contactMe: {
    fontSize: "2vw",
    color: "#D8DEE9",
    marginBottom: 0,
  },
  headerDivider: {
    border: 0,
    borderTop: "5px dotted #D8DEE9",
    ['@media (max-width:312px)']: {
      marginTop: "15px",
    },
    width: "60%",
    height: "5"
  },
  listItem: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  listIcon: {
    color: "#D8DEE9",
    transform: "scale(2)"
  },
  listText: {
    color: "#D8DEE9",
    fontSize: "1.5vw",
    margin: "4%",
  },
}));

const Contact = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.leftContainer}>
          <h1 variant="h3" className={classes.name}>
            Emmanuel Bustos Torres
          </h1>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.rightContainer}>
          <h1 variant="h3" className={classes.contactMe}>
            Contact Me
          </h1>
          <hr className={classes.headerDivider}/>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listIcon}>
                <PhoneAndroidIcon/>
              </ListItemIcon>
              <ListItemText>
                <p className={classes.listText}>
		  (+506) 8730-9726
                </p>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <MailIcon/>
              </ListItemIcon>
              <ListItemText className={classes.listText}>
                <p className={classes.listText}>
                  ema2159@gmail.com
                </p>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listIcon}></ListItemIcon>
              <ListItemText className={classes.listText}></ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Contact;
