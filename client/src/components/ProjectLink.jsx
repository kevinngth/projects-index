import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    links: {
        textDecoration: "none",
        color: "#A4A9B3",
        "&:hover": {
            color: "#282C34",
        },
        "&:active": {
            color: "#FFFFFF",
        },
    },
}));

const ProjectLink = (props) => {
    const classes = useStyles();
    const { label, url } = props;
    return (
        <a className={classes.links} href={url}>
            {label || "untitled"}
        </a>
    );
};

export default ProjectLink;
