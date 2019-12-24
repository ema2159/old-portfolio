import React, { useRef } from "react";
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from './SideMenu.js';

const NavBar = () => {
    const ref = useRef(null);

    const handleClick = () => {
	ref.current.handleDrawerOpen();
    };
    return(
	<div>
	  <AppBar position='static'>
	    <Toolbar>
	      <IconButton
                onClick={handleClick}
		edge="start"
		color="inherit"
		aria-label="menu"
	      >
		<MenuIcon/>
	      </IconButton>
	      <Typography variant='title' color='inherit'>
		Emmanuel's Portfolio
	      </Typography>
	    </Toolbar>
	  </AppBar>
	  <SideMenu ref={ref}></SideMenu>
	</div>
    );
}

export default NavBar;
