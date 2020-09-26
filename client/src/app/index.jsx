import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar } from "../components";
import { Home, UpdateStudent } from "../pages";
import "./index.css";
import Paper from "@material-ui/core/Paper";

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
});

const useStyles = makeStyles((theme) => ({
    layout: {
        width: "auto",
        marginLeft: 0,
        marginRight: 0,
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            maxWidth: 1000,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <div className="App">
            <Router>
                <NavBar />
                <div className={classes.layout}>
                    <ThemeProvider theme={darkTheme}>
                        <Paper className={classes.paper}>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route
                                    path="/update"
                                    exact
                                    component={UpdateStudent}
                                />
                            </Switch>
                        </Paper>
                    </ThemeProvider>
                </div>
            </Router>
        </div>
    );
};

export default App;
