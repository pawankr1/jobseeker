import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import LikeIcon from '@material-ui/icons/ThumbUp';
import DisLikeIcon from '@material-ui/icons/ThumbDown';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

export default class Response extends Component {
  constructor(){
    super();
    this.state = {
      open: false,
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    console.log('pawan kumar');
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };
  render() {
    return (
      <div style={{textAlign:'center',marginBottom:'150px'}}>
        <Button variant="fab" style={{marginRight:'20px',color:'red',backgroundColor:'rgb(247, 236, 236)'}}>
          <DisLikeIcon />
        </Button>
        <Button variant="fab" style={{marginRight:'20px',backgroundColor:'rgb(247, 236, 236)'}}>
          <BookmarkIcon />
        </Button>
        <Button variant="fab" onClick={this.handleOpen} style={{marginRight:'20px',color:'green',backgroundColor:'rgb(247, 236, 236)'}}>
          <LikeIcon />
        </Button>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className="modal">
            <p style={{textAlign:'center'}}><b>Interest</b></p>
            <p style={{fontSize:'90%',margin:'20px'}}>Choose what level of details you would like to share when showing interest</p>
            
          </div>
        </Modal>
      </div>
    )
  }
}
