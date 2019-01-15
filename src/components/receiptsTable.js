import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
        alignItems: 'center'
    },
    table: {
        minWidth: 400,
        textAlign: 'center',
    },
};

function ReceiptsTable(props) {
    const { classes, receiptsData } = props;

    return(
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Amount (CAD $)</TableCell>
                    <TableCell align="right">Original Currency</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {receiptsData !== undefined && receiptsData.map((n, i) => {
                    return (
                    <TableRow key={i}>
                        <TableCell component="th" scope="row">
                        {n.description}
                        </TableCell>
                        <TableCell>{n.amount}</TableCell>
                        <TableCell align="right">{n.currency}</TableCell>
                    </TableRow>
                    );
                })}
                </TableBody>
            </Table>
        </Paper>
    ) 
}

ReceiptsTable.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReceiptsTable);