// Libraries and libraries' elements
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
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

// Components
import ResumePDF from "../data/resume.pdf";
import SideMenu from "./SideMenu.js";

// Styles
const useStyles = makeStyles(theme => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2),
    ["@media (min-width:1100px)"]: {
      display: "none"
    }
  },
  title: {
    flexGrow: 1,
    fontSize: "calc(17px + 0.3vw)"
  },
  appBar: {
    position: "fixed",
    top: 0,
    background: "#203A43",
    background: "-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)",
    background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
  },
  tabs: {
    ["@media (max-width:1100px)"]: {
      display: "none"
    }
  },
  indicator: {
    background: "#e8e8e8"
  }
}));

// Main Component
const NavBar = () => {
  // Tabs functions and properties
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (newValue != 3) {
      setValue(newValue);
    }
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

  const handleDrawerOpen = () => {
    ref.current.handleDrawer();
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            onClick={handleDrawerOpen}
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
              icon={<ContactPhoneIcon />}
              label="Contact"
              to="/Contact"
              component={Link}
            />
            <Tab
              icon={<DescriptionIcon />}
              label="Resume"
              target="_blank"
              href={ResumePDF}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <SideMenu tabsHandler={setValue} ref={ref} />
    </div>
  );
};

export default NavBar;
