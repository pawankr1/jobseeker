import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Jobdata from '../data.json'; 
import Slider from "react-slick";
import AdoveImage from '../Adove.png';
import Progress from './Progress';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


export default class JobList extends Component {
  render() {
    const listOfJob = Jobdata.list.map(company => {
      return (
        <div key={company.companyName} className="specJobData">
          <div className='JobListHeading'>
            <div >
              <p style={{fontSize:'100%'}}><b>Data Scientist</b></p>
              <p style={{fontSize:'95%'}}>{company.companyName}</p>
              <p style={{fontSize:'80%'}}>{company.city}, IN</p>
              <p style={{fontSize:'70%',color:'blue'}}>Expiring in 2 days!</p>
            </div>
            <div>
            <img src={AdoveImage} style={{height:'80px',width:'80px',marginTop:'20px'}}/>
            </div>
          </div>
          <hr/>
          <p style={{fontSize:'88%'}}><b>Specialities : </b> Java, Node.js, Swing, Hibernate, J2EE, Hadoop, Spring...</p>
          <p style={{fontSize:'90%',textAlign:'end',marginRight:'30px'}}><Link to={`company/${company.companyName}`}>Read more..</Link></p>
          <div style={{padding:'10px',fontSize:'80%'}}>
            <label>90% Profile Match</label>
            <Progress />
          </div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Avatar style={{background:'blue'}}>P</Avatar>
            <label style={{fontSize:'80%'}}>Posted by : Pawan Kumar</label>
            <label style={{marginRight:'20px',color:'blue',fontSize:'80%'}}>Quick response</label>
          </Grid>
        </div>
      )
    })
    var settings = {
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="JobList">
        <Slider {...settings}>
          {listOfJob}
        </Slider>
      </div>
    )
  }
}
