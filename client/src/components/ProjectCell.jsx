import React from "react";
import TableCell from "@material-ui/core/TableCell";
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

const appLink = (title, url, classes) => {
    return (
        <a className={classes} href={url}>
            {title || "untitled"}
        </a>
    );
};

const repoLink = (url, classes) => {
    return (
        <a className={classes} href={url}>
            Repo
        </a>
    );
};

const ProjectCell = (props) => {
    const classes = useStyles();
    const { project } = props;
    return (
        <TableCell align="left">
            {project && (
                <>
                    {(project.appURL || project.title) &&
                        appLink(project.title, project.appURL, classes.links)}
                    {project.appURL && project.repoURL && " / "}
                    {project.repoURL &&
                        repoLink(project.repoURL, classes.links)}
                </>
            )}
        </TableCell>
    );
};

export default ProjectCell;
