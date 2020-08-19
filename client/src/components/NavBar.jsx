import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import NavLinks from "./NavLinks";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#616773",
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.root}>
            <Toolbar>
                <NavLinks />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
