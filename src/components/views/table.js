import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import NewRealeasesIcon from '@material-ui/icons/NewReleases';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import ReceiptsTable from '../receiptsTable';

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
    projectTitle: {
        margin: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
    }
  });

class SimpleTable extends Component {
    state = {
        description: '',
        amount: '',
        currency: '',
        totalCad: 0,
        totalCadError: false,
        currencyError: false,
        CurrencyData: {rates: {}},
        receiptsData: [],
        maxError: ''
    }

    generateReceiptDict = () => {
        let currencyCheck = this.state.currency === "";

        if (currencyCheck) {
            this.setState({
                currencyError: currencyCheck
            })
            return {}
        } else {
            this.setState({
                currencyError: false
            })
            return {
                "description": this.state.description,
                "currency": this.state.currency,
                "amount": this.state.amount / this.state.CurrencyData.rates[this.state.currency]
            }
        }
    }

    addReceipt = (event) => {
        event.preventDefault();
        if (this.state.receiptsData.length >= 5) {
            this.setState({
                maxError: true
            })
            return;
        } else {
            let receiptDict = this.generateReceiptDict();
            if (receiptDict === {}) {
                return;
            } else {
                if (Number(this.state.totalCad + receiptDict['amount']) > 1000) {
                    this.setState({
                        totalCadError: true
                    })
                } else {
                    this.setState({
                        totalCadError: false,
                    })
                    this.state.receiptsData.push(receiptDict)
                    this.state.totalCad += Number(receiptDict['amount'])
                }
            }
        }
    }

    loadCurrencyData = () => {
        fetch('https://api.exchangeratesapi.io/latest?base=CAD')
        .then(res => res.json()).then(json => {
            this.setState({
                CurrencyData: json
            })
        }).catch(error => console.error('Error: ', error));
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value
        })
    }

    componentDidMount() {
        this.loadCurrencyData();
    }

    render() {
        const { classes } = this.props;

        return(
            <React.Fragment>
                <main className={classes.main}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <NewRealeasesIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h6">
                        Add a receipt
                        </Typography>
                        <form className={classes.form} onSubmit={this.addReceipt}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="description">Description</InputLabel>
                                <Input value={this.state.description} onChange={this.handleChange('description')} id="description" name="description" autoFocus disableUnderline/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="amount">Amount</InputLabel>
                                <Input value={this.state.amount} onChange={this.handleChange('amount')} name="amount" id="amount" disableUnderline/>
                            </FormControl>
                            <FormControl margin="normal" fullWidth>
                                <TextField id="currency" label="Currency" required value={this.state.currency} select onChange={this.handleChange('currency')}>
                                    {Object.keys(this.state.CurrencyData.rates).map((ccy, i) => (
                                        <MenuItem key={i} value={ccy}>
                                            {ccy}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                {this.state.currencyError === true ? <FormHelperText error>Please select the currency</FormHelperText> : null}
                            </FormControl> 
                            <FormControl margin="normal" fullWidth>
                                {this.state.maxError === true ? <FormHelperText error>You can only have 5 receipts in the table at one time</FormHelperText> : null}
                                {this.state.totalCadError === true ? <FormHelperText error>You can only have upto $1000 CAD worth of goods in the table</FormHelperText> : null}
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Add Receipt
                            </Button>
                        </form>
                    </Paper>
                    <Typography component="h1" variant="h6" className={classes.projectTitle}>
                        My Receipts
                    </Typography>
                    <ReceiptsTable receiptsData={this.state.receiptsData}/>
                </main>
            </React.Fragment>
        )
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleTable);