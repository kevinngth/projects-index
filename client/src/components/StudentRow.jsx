import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import ProjectCell from "./ProjectCell";

const StudentRow = (props) => {
    const {
        student: { name, project1, project2, project3, project4 },
    } = props;
    return (
        <TableRow key={name}>
            <TableCell component="th" scope="row">
                {name}
            </TableCell>
            <ProjectCell project={project1} />
            <ProjectCell project={project2} />
            <ProjectCell project={project3} />
            <ProjectCell project={project4} />
        </TableRow>
    );
};

export default StudentRow;
