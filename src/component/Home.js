import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const Home = props => {
 return (
  <AppBar position="static" style={{position:'fixed',top:'0px',width:'100%',background:'#00bfff'}}>
    <Toolbar className="toolbar">
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
        <Link to="/" style={{color:'white'}}>Home</Link>
      </Typography>
    </Toolbar>
  </AppBar>
 );
};
export default Home;