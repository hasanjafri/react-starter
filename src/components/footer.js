import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`
    }
})

const footerColumns = [
    {
        title: 'Company',
        tabs: ['Team', 'History', 'Contact us', 'Locations']
    },
    {
        title: 'Features',
        tabs: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one']
    },
    {
        title: 'Resources',
        tabs: ['Resource', 'Resource name', 'Another resource', 'Final resource']
    },
    {
        title: 'Legal',
        tabs: ['Privacy policy', 'Terms of use']
    }
];

function Footer(props) {
    const { classes } = props;

    return(
        <React.Fragment>
            <footer className={classNames(classes.footer, classes.layout)}>
                <Grid container spacing={32} justify="space-evenly">
                    {footerColumns.map(footer => (
                        <Grid item xs key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            {footer.tabs.map(item => (
                                <Typography key={item} variant="subtitle1" color="textSecondary">
                                    {item}
                                </Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </footer>
            <section id="footer" className="teal lighten-1">
                <div className="container">
                    <div className="row">
                        <div className="col s3"/>
                        <div className="col s6 center-align white-text">
                            © 2019 All Rights Reserved Terms of Use and Privacy Policy
                        </div>
                        <div className="col s3"/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);