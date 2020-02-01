import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Drawer, IconButton } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import WorkIcon from "@material-ui/icons/Work";

const drawerWidth = "270px";

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

const SideMenu = forwardRef((props, ref) => {
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
      handleDrawerOpen: handleDrawerOpen
    };
  });

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
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
	<Divider/>
	<ListItem button>
          <ListItemIcon className={classes.drawerIcon}>
            <PersonPinIcon />
          </ListItemIcon>
          <ListItemText className={classes.drawerText}>About Me</ListItemText>
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemIcon className={classes.drawerIcon}>
            <AccountTreeIcon />
          </ListItemIcon>
          <ListItemText className={classes.drawerText}>Projects</ListItemText>
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemIcon className={classes.drawerIcon}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText className={classes.drawerText}>Work History</ListItemText>
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemIcon className={classes.drawerIcon}>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText className={classes.drawerText}>Resume</ListItemText>
        </ListItem>
        <Divider/>
      </List>
    </Drawer>
  );
});

export default SideMenu;
