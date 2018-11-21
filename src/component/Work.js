import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
});

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
          <GridListTile >
          <div style={{height:'140px',width:'140px',background:'lightgray'}}></div>
          </GridListTile>
          <GridListTile >
          <div style={{height:'140px',width:'140px',background:'lightgray'}}></div>
          </GridListTile>
          <GridListTile >
          <div style={{height:'140px',width:'140px',background:'lightgray'}}></div>
          </GridListTile>
          <GridListTile >
          <div style={{height:'140px',width:'140px',background:'lightgray'}}></div>
          </GridListTile>
          <GridListTile >
          <div style={{height:'140px',width:'140px',background:'lightgray'}}></div>
          </GridListTile>
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);