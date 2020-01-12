import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
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
                <TableCell align="centre">
                  <DescriptionIcon />
                  DESCRIPTION
                </TableCell>
                <TableCell align="centre">
                  <HourglassEmptyIcon /> STATE
                </TableCell>
                <TableCell align="centre">
                  <HourglassEmptyIcon /> competence_pool
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
                    {row.description}
                  </TableCell>
                  <TableCell align="centre">
                    {row.currentState}
                  </TableCell>
                  <TableCell align="centre">
                    {row.competence_pool}
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
