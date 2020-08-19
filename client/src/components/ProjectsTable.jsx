import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
});

const useStyles = makeStyles({
    container: {
        maxWidth: 1000,
    },
    table: {
        minWidth: 450,
    },
});

const ProjectsTable = (props) => {
    const classes = useStyles();

    const { students } = props;

    return (
        <ThemeProvider theme={darkTheme}>
            <TableContainer component={Paper} className={classes.container}>
                <Table className={classes.table}>
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
                        {students.map((student) => (
                            <TableRow key={student.name}>
                                <TableCell component="th" scope="row">
                                    {student.name}
                                </TableCell>
                                <TableCell align="left">
                                    {student.project1}
                                </TableCell>
                                <TableCell align="left">
                                    {student.project2}
                                </TableCell>
                                <TableCell align="left">
                                    {student.project3}
                                </TableCell>
                                <TableCell align="left">
                                    {student.project4}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
};

export default ProjectsTable;
