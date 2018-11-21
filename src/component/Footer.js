import React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import MapsPersonPin from "material-ui/svg-icons/maps/person-pin";
import Activity from "material-ui/svg-icons/action/alarm";
import Favorite from "material-ui/svg-icons/action/favorite";
import JobsIcon from '@material-ui/icons/Assignment';

const Footer = props => {
 return (
     <Tabs 
     style={{position:'fixed',bottom:'0px',width:'100%'}}
     indicatorColor="primary"
     textColor="primary"
     >
       <Tab icon={<JobsIcon />} label="JOBS" />
       <Tab icon={<Activity />} label="ACTIVITY" />
       <Tab icon={<Favorite />} label="FEED" />
       <Tab icon={<MapsPersonPin />} label="PROFILE" />
     </Tabs>

 );
};
export default Footer;