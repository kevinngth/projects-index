import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { ProjectLink } from "../components";

const ProjectCell = (props) => {
    const REPO = "Repo";
    const { project } = props;
    return (
        <TableCell align="left">
            {project && (
                <>
                    {(project.appURL || project.title) && (
                        <ProjectLink
                            label={project.title}
                            url={project.appURL}
                        />
                    )}
                    {project.appURL && project.repoURL && " / "}
                    {project.repoURL && (
                        <ProjectLink label={REPO} url={project.repoURL} />
                    )}
                </>
            )}
        </TableCell>
    );
};

export default ProjectCell;
