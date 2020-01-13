import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Details from './Details'
import {
  Typography,
  Grid,
  Tooltip,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
  Link,
} from '@material-ui/core/';
import GroupIcon from '@material-ui/icons/Group';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import DescriptionIcon from '@material-ui/icons/Description';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import '../Client/states.css';
export class CIRHome extends Component {
  state = {
    requests: [
      {
        research_team: 'gl2',
        name: 'idea',
        description: 'my idea ,my money',
        currentState: 'processing',
        competence_pool: 'UM5s',
      },
      {
        research_team: 'gl2',
        name: 'company',
        description: 'suicide is the solution',
        currentState: 'validated',
        competence_pool: 'UM5s',
      },
    ],
    competences_pool: ['UM5s', 'ANA'],
  };
  DetailsFunc= (key)=>{
    
  }
  render() {
    return (
      <div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="centre">
                  <GroupIcon />
                  RESEARCH TEAM
                </TableCell>
                <TableCell align="centre">
                  <AnnouncementIcon />
                  IDEAS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.requests.map(row => (
                <TableRow key={row.name}>
                  <TableCell align="centre">
                    {row.research_team}
                  </TableCell>
                  <TableCell align="centre">
                    <Link href="/details">{row.name}</Link>
                  </TableCell>
                  <TableCell align="centre">
                  <Button variant="outlined" color="secondary" onclick={()=>()=>this.DetailsFunc(row.name)}>
                details
            </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
export default CIRHome;
