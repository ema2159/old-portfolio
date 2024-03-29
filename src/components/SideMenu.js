// Libraries and libraries' elements
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Drawer, IconButton } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

// Components
import ResumePDF from "../data/resume.pdf";

// Variables
const drawerWidth = "270px";

// Styles
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  drawerIcon: {
    color: "#2C5364"
  },
  drawerText: {
    color: "#2C5364"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

// Main Component
const SideMenu = forwardRef((props, ref) => {
  // Drawer functions and properties
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => {
    return {
      handleDrawer: handleDrawerOpen
    };
  });

  return (
    <Drawer
      className={classes.drawer}
      variant="temporary"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
      ModalProps={{ onBackdropClick: handleDrawerClose }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <List>
        <Divider />
        <ListItem
          button="true"
          onClick={event => props.tabsHandler(0, event)}
          label="About Me"
          to="/"
          component={Link}
        >
          <ListItemIcon className={classes.drawerIcon}>
            <PersonPinIcon />
          </ListItemIcon>
          <ListItemText className={classes.drawerText}>About Me</ListItemText>
        </ListItem>
        <Divider />
        <ListItem
          button="true"
          onClick={event => props.tabsHandler(1, event)}
          label="Projects"
          to="/Projects"
          component={Link}
        >
          <ListItemIcon className={classes.drawerIcon}>
            <AccountTreeIcon />
          </ListItemIcon>
          <ListItemText className={classes.drawerText}>Projects</ListItemText>
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={event => props.tabsHandler(2, event)}
          label="Contact"
          to="/Contact"
          component={Link}
        >
          <ListItemIcon className={classes.drawerIcon}>
            <ContactPhoneIcon />
          </ListItemIcon>
          <ListItemText className={classes.drawerText}>Contact</ListItemText>
        </ListItem>
        <Divider />
        <ListItem
          button
          label="Resume"
          component="a"
          target="_blank"
          href={ResumePDF}
        >
          <ListItemIcon className={classes.drawerIcon}>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText className={classes.drawerText}>Resume</ListItemText>
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
});

export default SideMenu;
