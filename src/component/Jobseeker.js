import React, { Component } from 'react'
import JobList from './JobList';
import Response from './Response';
import Footer from './Footer';
import Header from './Header';

export default class Jobseeker extends Component {
  constructor(){
    super();
    this.state = {
      value:0,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, value) {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <Header />
        <JobList />
        <Response />   
        <Footer />
      </div>
    )
  }
}
