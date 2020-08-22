import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { StudentRow } from "../components";

const ProjectsTable = (props) => {
    const { students } = props;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="left">Project 1</TableCell>
                    <TableCell align="left">Project 2</TableCell>
                    <TableCell align="left">Project 3</TableCell>
                    <TableCell align="left">Project 4</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((student) => {
                    return <StudentRow student={student} key={student._id} />;
                })}
            </TableBody>
        </Table>
    );
};

export default ProjectsTable;
