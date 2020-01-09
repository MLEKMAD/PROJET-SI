import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core/';
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';
//const classes = useStyles();

export class States extends Component {
  state = {
    lkhdra:"btata",
    states: [],
  };
  render() {
    return (
      <div>
        <Typography variant="h3" gutterBottom>
          Change the state of requests
        </Typography>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="flex-start"
        >
          heeey `{this.state.lkhdra}`
        </Grid>
      </div>
    );
  }
}
export default States;
