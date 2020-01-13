import React, { Component } from 'react';
import { Typography, Grid, Tooltip,TableContainer,TableBody,TableCell,TableHead,TableRow,Table } from '@material-ui/core/';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import DescriptionIcon from '@material-ui/icons/Description';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import '../CIR/states.css'
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';
import color from '@material-ui/core/colors/amber';
//const classes = useStyles();

export class GUHome extends Component {
  state = {
    lkhdra: 'btata',
    states: [
      {
        name: 'idea',
        description: 'my idea ,my money',
        currentState: 'processing',
      },
      {
        name: 'compagny',
        description: 'suicide is the solution',
        currentState: 'validated',
      },
    ],
  };

  render() {
    return (
      <div>
        <Typography style={{color: "gray"}} variant="h3" gutterBottom>
          Change the state of requests
        </Typography>
        <TableContainer>
        <Table   aria-label="simple table">

        <TableHead>
          <TableRow style={{backgroundColor: "blue",color:"red"}}>
            <TableCell  align="centre"><AnnouncementIcon/>IDEAS</TableCell>
            <TableCell align="centre"><DescriptionIcon/>DESCRIPTION</TableCell>
            <TableCell  align="centre"><HourglassEmptyIcon/> STATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.states.map(row => (
          <TableRow key={row.name} style={{backgroundColor: "blue",color:"red"}}>
              <TableCell  align="centre">{row.name}</TableCell>
              <TableCell  align="centre">{row.description}</TableCell>
              <TableCell  align="centre">{row.currentState}</TableCell>
            </TableRow>
          
        ))}
        </TableBody>
        </Table>
        </TableContainer>
      </div>
    );
  }
}
export default GUHome;
