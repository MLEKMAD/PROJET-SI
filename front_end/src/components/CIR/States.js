import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core/';
import useStyles from '../Navbar/style';
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
          heeey
        </Grid>
      </div>
    );
  }
}
export default States;
