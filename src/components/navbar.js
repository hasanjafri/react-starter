import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    appBar: {
        position: 'relative'
    },
    toolbarTitle: {
        flex: 1
    }
});

function NavBar(props) {
    const { classes } = props;

    return(
        <React.Fragment>
            <AppBar position="static" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="headline" color="inherit" noWrap className={classes.toolbarTitle}>
                        React-Starter
                    </Typography>
                    <Button>Home</Button>
                    <Button>Other Page</Button>
                    <Button>Another Page</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar);