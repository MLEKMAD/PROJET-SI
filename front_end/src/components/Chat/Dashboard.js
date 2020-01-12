import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root : {
        margin: '50px',
        padding: theme.spacing(3, 2),

    }
}));

export default function Dashboard() {

    const classes = useStyles();


    return(
        <div>
            <Paper className={classes.root} >


            This is a sheet of paper

            </Paper>


        </div>
    )

}

