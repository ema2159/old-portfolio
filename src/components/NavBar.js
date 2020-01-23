import React, { useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  IconButton,
  Tabs,
  Tab,
  Toolbar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import MenuIcon from "@material-ui/icons/Menu";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import WorkIcon from "@material-ui/icons/Work";
import SideMenu from "./SideMenu.js";

const NavBar = () => {
  // Tabs functions and properties
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }

  // Drawer functions and properties
  const ref = useRef(null);

  const handleDrawer = () => {
    ref.current.handleDrawerOpen();
  };

  // Styles
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    appBar: {
      position: "fixed",
      top: 0,
      background: "#0F2027",
      background:
        "-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)",
      background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)"
    },
    tabs: {},
    indicator: {
      background: "#e8e8e8"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            onClick={handleDrawer}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Emmanuel Bustos Torres
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabs}
            classes={{ indicator: classes.indicator }}
          >
            <Tab
              icon={<PersonPinIcon />}
              label="About Me"
              to="/"
              component={Link}
            />
            <Tab
              icon={<AccountTreeIcon />}
              label="Projects"
              to="/Projects"
              component={Link}
            />
            <Tab
              icon={<WorkIcon />}
              label="Work History"
              to="/WorkHistory"
              component={Link}
            />
            <Tab
              icon={<DescriptionIcon />}
              label="Resume"
              to="/Resume"
              component={Link}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <SideMenu ref={ref}></SideMenu>
    </div>
  );
};

export default NavBar;
