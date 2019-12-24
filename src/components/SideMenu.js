import React, { useState, forwardRef, useImperativeHandle } from "react";
import {Drawer, IconButton} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
	display: 'flex',
    },
    appBar: {
	transition: theme.transitions.create(['margin', 'width'], {
	    easing: theme.transitions.easing.sharp,
	    duration: theme.transitions.duration.leavingScreen,
	}),
    },
    appBarShift: {
	width: `calc(100% - ${drawerWidth}px)`,
	marginLeft: drawerWidth,
	transition: theme.transitions.create(['margin', 'width'], {
	    easing: theme.transitions.easing.easeOut,
	    duration: theme.transitions.duration.enteringScreen,
	}),
    },
    menuButton: {
	marginRight: theme.spacing(2),
    },
    hide: {
	display: 'none',
    },
    drawer: {
	width: drawerWidth,
	flexShrink: 0,
    },
    drawerPaper: {
	width: drawerWidth,
    },
    drawerHeader: {
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
    },
    content: {
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create('margin', {
	    easing: theme.transitions.easing.sharp,
	    duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: -drawerWidth,
    },
    contentShift: {
	transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
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
    
    return(
	<Drawer
	  className={classes.drawer}
	  variant="persistent"
	  anchor="left"
	  open={open}
	  classes={{
	      paper: classes.drawerPaper,
	  }}>
	  <div className={classes.drawerHeader}>
	    <IconButton onClick={handleDrawerClose}>
	      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
	    </IconButton>
	  </div>
	</Drawer>
    );
});

export default SideMenu;
