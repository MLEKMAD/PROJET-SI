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

export class CIR_response extends Component {
  state = {
    lkhdra: 'btata',
    states: [
      {
        name: 'idea',
        description: 'accepted',
        date:"27/12/2019"

      },
      {
        name: 'compagny',
        description: 'denied',
        date:"27/12/2019"
      },
    ],
  };

  render() {
    return (
      <div>
        <Typography style={{color: "gray"}} variant="h3" gutterBottom>
CIR's Response        </Typography>
        <TableContainer>
        <Table   aria-label="simple table">

        <TableHead>
          <TableRow style={{backgroundColor: "white",color:"red"}}>
            <TableCell  align="centre"><AnnouncementIcon/>IDEAS</TableCell>
            <TableCell  align="centre"><AnnouncementIcon/>Accepted/ Denied </TableCell>
            <TableCell  align="centre"><HourglassEmptyIcon/>Date </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.states.map(row => (
          <TableRow key={row.name} style={{backgroundColor: "white",color:"red"}}>
              <TableCell  align="centre">{row.name}</TableCell>
              <TableCell  align="centre">{row.description}</TableCell>
              <TableCell  align="centre">{row.date}</TableCell>

            </TableRow>
          
        ))}
        </TableBody>
        </Table>
        </TableContainer>
      </div>
    );
  }
}
export default CIR_response;
