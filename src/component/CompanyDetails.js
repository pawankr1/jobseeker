import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Jobdata from '../data.json';
import Response from './Response';
import AdoveImage2 from '../Adove2.jpeg';
import AdoveImage from '../Adove.png';
import CheckCircle from '@material-ui/icons/CheckCircle';
import UnCheckCircle from '@material-ui/icons/HighlightOff';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import SingleLineGridList from './Work';

export default class CompanyDetails extends Component {
  render() {
    const companyName = this.props.match.params.name
    const companyData = Jobdata.list.filter(company => company.companyName === companyName)
    const roles = companyData[0].jobDesc.split(',' || ';');
    const rolesData = roles.map(element => {
      return (
        <li style={{marginBlockStart:'10px',marginRight:'10px',fontSize:'90%'}}>{element}</li>
      )
    })
    return (
      <div className="companyDetails">
        <Link to="/"><img src={AdoveImage2} style={{height:'150px',width:'98%',position:'absolute',top:'0px'}}/></Link>
        <img src={AdoveImage} style={{height:'60px',width:'60px',position:'relative',top:'120px',left:'40%'}}/>
        <div className="heading">
          <p style={{fontSize:'120%'}}><b>Front End Developer</b></p>
          <p style={{fontSize:'90%'}}><b>{companyData[0].companyName}</b></p>
          <p style={{fontSize:'90%'}}>{companyData[0].city}, IN</p>
          <p style={{fontSize:'90%'}}>Salary: {companyData[0].minSal} - {companyData[0].maxSal}</p>
          <p style={{fontSize:'90%'}}>Experience: ({companyData[0].minExp} - {companyData[0].maxExp}) years</p>
          <hr/>
        </div>
        <div className="roles">
          <p style={{fontSize:'105%', textAlign:'center'}}><b>Roles and Responsibilities</b></p>
          <ol>
            {rolesData}
          </ol>
        </div>
        <div className="qualifications">
          <p style={{fontSize:'105%', textAlign:'center'}}><b>Qualifications</b></p>
          <p style={{fontSize:'90%', textAlign:'center'}}>Your match : <span style={{backgroundColor:'green',color:'white',padding:'3px'}}> 5/5 </span></p>
          <p style={{fontSize:'90%',marginRight:'10px',marginLeft:'20px'}}><CheckCircle style={{color:'green',fontSize:'120%'}}/>  3+ yeas experience in Angular.js</p>
          <p style={{fontSize:'90%',marginRight:'10px',marginLeft:'20px'}}><CheckCircle style={{color:'green',fontSize:'120%'}}/>  Working with a tier-1 company</p>
          <p style={{fontSize:'90%',marginRight:'10px',marginLeft:'20px'}}><CheckCircle style={{color:'green',fontSize:'120%'}}/>  Bachelors/Masters from a premium institute</p>
          <p style={{fontSize:'90%',marginRight:'10px',marginLeft:'20px'}}><CheckCircle style={{color:'green',fontSize:'120%'}}/>  Bengaluru based or ready to relocate</p>
          <p style={{fontSize:'90%',marginRight:'10px',marginLeft:'20px'}}><CheckCircle style={{color:'green',fontSize:'120%'}}/>  1+ years experience in a role that requires analyzing a large amount of data is preferred</p>
        </div>
        <div>
          <p style={{fontSize:'105%', textAlign:'center'}}><b>Work Culture / Team</b></p>
          <SingleLineGridList />
        </div>
        <div className="perks">
          <p style={{fontSize:'105%', textAlign:'center'}}><b>Perks</b></p>
          <ul style={{fontSize:'90%'}}>
            <li style={{marginBlockStart:'10px'}}>Cab pickup and drop from home</li>
            <li style={{marginBlockStart:'10px'}}>In house Creche with trained assistance</li>
            <li style={{marginBlockStart:'10px'}}>20% monthly work from home</li>
            <li style={{marginBlockStart:'10px'}}>On-the-house breakfast and lunch</li>
          </ul>
        </div>
        <div>
          <p style={{fontSize:'105%', textAlign:'center'}}><b>Facilities</b></p>
          <div className="facilities">
            <div style={{height:'80px',width:'80px',background:'lightgray'}}></div>
            <div style={{height:'80px',width:'80px',background:'lightgray'}}></div>
            <div style={{height:'80px',width:'80px',background:'lightgray'}}></div>
            <div style={{height:'80px',width:'80px',background:'lightgray'}}></div>
          </div>
        </div>
        <div className="reviews">
          <p style={{fontSize:'105%', textAlign:'center'}}><b>Reviews</b></p>
          <div style={{fontSize:'90%',marginRight:'10px',marginLeft:'20px'}}>
            <p><CheckCircle style={{color:'green',fontSize:'120%'}} /> "Good work life balance because work pace is very slow" (in 540 reviews)</p>
            <p><UnCheckCircle style={{color:'red',fontSize:'120%'}} /> "Technological exposure could be limited" (in 223 reviews)</p>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                <Typography >Other reviews..</Typography>
                </Grid>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p><CheckCircle style={{color:'green',fontSize:'120%'}} /> "Good work life balance because work pace is very slow" (in 540 reviews)</p>
                  <p><UnCheckCircle style={{color:'red',fontSize:'120%'}} /> "Technological exposure could be limited" (in 223 reviews)</p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
        <div style={{marginTop:'50px'}}>
          <Response />
        </div>
      </div>
    )
  }
}
