import React, { Component } from 'react';
import { Typography, Grid, Tooltip,TableContainer,TableBody,TableCell,TableHead,TableRow,Table, Link } from '@material-ui/core/';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import DescriptionIcon from '@material-ui/icons/Description';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import './states.css'
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

export class States extends Component {
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
      }
    ],
  };

  render() {
    return (
      <div>
        <Typography style={{color: "gray"}} variant="h3" gutterBottom>
          Change the state of requests
        </Typography>
        <TableContainer>
        <Table   aria-label="customized   table">

        <TableHead>
          <TableRow className='TableRow'>
            <TableCell  align="centre"><AnnouncementIcon/>IDEAS</TableCell>
            <TableCell align="centre"><DescriptionIcon/>DESCRIPTION</TableCell>
            <TableCell  align="centre"><HourglassEmptyIcon/> STATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.states.map(row => (
<<<<<<< HEAD:front_end/src/components/Client/States.js
          <TableRow key={row.name} style={{backgroundColor: "blue",color:"red"}}>
              <TableCell  align="centre"><Link href="/details">{row.name}</Link></TableCell>
=======
          <TableRow className="TableRow">
              <TableCell  align="centre">{row.name}</TableCell>
>>>>>>> master:front_end/src/components/CIR/States.js
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
export default States;
