import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > * + *": {
            marginLeft: theme.spacing(2),
        },
    },
    links: {
        color: "#A4A9B3",
        "&:hover": {
            color: "#282C34",
        },
        "&:active": {
            color: "#A4A9B3",
        },
    },
}));

const NavLinks = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.root}>
            <Link to="/" className={classes.links}>
                <HomeIcon />
            </Link>
            <Link to="#" className={classes.links}>
                <EditIcon />
            </Link>
        </Typography>
    );
};

export default NavLinks;
