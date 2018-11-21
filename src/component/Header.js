import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = props => {
 return (
  <AppBar position="static" style={{position:'fixed',top:'0px',width:'100%',background:'#00bfff'}}>
    <Toolbar className="toolbar">
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
        Jobs for you
      </Typography>
      <Button color="inherit" style={{marginLeft:30}}>Login</Button>
      <Button color="inherit" >Sign in</Button>
    </Toolbar>
  </AppBar>
 );
};
export default Header;