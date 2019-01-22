import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import AppBar from '../components/ZnAppBar'
import AppDrawer from '../components/ZnAppDrawer'
import { routes } from '../../routes'
import '../styles/app.css'



const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        height: '100%'
    },

    appBody: {
        left: -50,
    },

    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        // padding: theme.spacing.unit * 3,
    },
});

const App = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar />
            <AppDrawer entitlements={props.entitlements} />
            <main className={classes.content}>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route.main}
                    />
                ))}
            </main>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        entitlements: state.common.entitlements
    }
}
export default compose(withRouter, withStyles(styles), connect(mapStateToProps))(App);
