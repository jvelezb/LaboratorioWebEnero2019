import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import NavBar from './components/NavBar';
import AgregarElementoComponent from './components/AgregarElementoComponent';
import ItemsList from './components/ItemList';
import MenuRouter from './components/MenuRouter';





const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
});





class App extends React.Component {

    constructor(props){

        super(props);
    }
  render() {
        const { classes } = this.props;
    return (


        <React.Fragment>
            <CssBaseline />
             <NavBar />
            <MenuRouter />
            <main className={classes.layout}>

                <Paper className={classes.paper}>
                    <AgregarElementoComponent />
                </Paper>
                <ItemsList />
            </main>
        </React.Fragment>



    );
  }
}
App.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
