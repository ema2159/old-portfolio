import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppBar, Button, Box, IconButton, Tabs, Tab, Toolbar, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import WorkIcon from '@material-ui/icons/Work';
import SideMenu from './SideMenu.js';

const NavBar = () => {
    // Tabs functions and properties
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
	setValue(newValue);
    };
    function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
	    <Typography
	      component="div"
	      role="tabpanel"
	      hidden={value !== index}
	      id={`simple-tabpanel-${index}`}
	      aria-labelledby={`simple-tab-${index}`}
	      {...other}
	    >
	      {value === index && <Box p={3}>{children}</Box>}
	    </Typography>
	);
    }

    TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
	return {
	    id: `simple-tab-${index}`,
	    'aria-controls': `simple-tabpanel-${index}`,
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
	    flexGrow: 1,
	},
	menuButton: {
	    marginRight: theme.spacing(2),
	},
        title: {
            flexGrow: 1,
        },
    }));

    const classes = useStyles();
    
    return(
	<div className={classes.root}>
	  <AppBar position='static'>
	    <Toolbar>
	      <IconButton
                className={classes.menuButton}
		onClick={handleDrawer}
		edge="start"
		color="inherit"
		aria-label="menu" >
		<MenuIcon/>
	      </IconButton>
	      <Typography variant='h6' className={classes.title}>
		Emmanuel's Portfolio
	      </Typography>
	      <Tabs value={value}
                    onChange={handleChange}
                    className={classes.tabs} >
		<Tab icon={<PersonPinIcon />}
                     label="About Me"
		     to="/AboutMe"
		     component={Link}
                />
		<Tab icon={<DescriptionIcon />}
                     label="Resume"
		     to="/Resume"
		     component={Link}
                     />
		<Tab icon={<AccountTreeIcon />}
                     label="Projects"
		     to="/Projects"
		     component={Link}
                />
		<Tab icon={<WorkIcon />}
                     label="Work History"
		     to="/WorkHistory"
		     component={Link} />
	      </Tabs>
	    </Toolbar>
	  </AppBar>
	  <SideMenu ref={ref}></SideMenu>
	</div>
    );
}

export default NavBar;
