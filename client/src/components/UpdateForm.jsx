import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { BackDrop, Buttons, FormSelect, ProjectForm } from "../components";
import { toVarName } from "../utils";
import api from "../api";

const UpdateForm = () => {
    const PROJECT_LABELS = ["Project 1", "Project 2", "Project 3", "Project 4"];

    const [isLoading, setIsLoading] = useState(false);
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({});
    const [projectId, setProjectId] = useState("");
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api.getAllStudents()
            .then((response) => {
                setStudents(response.data.data);
            })
            .then(setIsLoading(false));
    }, []);

    const nameChangeHandler = (e) => {
        const { value } = e.target;
        setStudent(students.find((student) => student.name === value));
    };

    const projectIdChangeHandler = (e) => {
        const { value } = e.target;
        setProjectId(toVarName(value));
    };

    const projectChangeHandler = (project) => {
        const updatedStudent = { ...student };
        updatedStudent[projectId] = project;
        setStudent(updatedStudent);
    };

    const submitHandler = async () => {
        setIsLoading(true);
        api.updateStudentById(student._id, student)
            .then((response) => {
                console.log(response.data.success);
            })
            .then(() => {
                setIsLoading(false);
                setShouldRedirect(true);
            });
    };

    if (shouldRedirect) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <BackDrop open={isLoading} />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormSelect
                        label="Name"
                        changeHandler={nameChangeHandler}
                        values={students.map((student) => {
                            return student.name;
                        })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormSelect
                        label="Project"
                        changeHandler={projectIdChangeHandler}
                        values={PROJECT_LABELS}
                    />
                </Grid>
                <ProjectForm
                    student={student}
                    projectId={projectId}
                    changeHandler={projectChangeHandler}
                />
            </Grid>
            <Buttons content={"Submit"} clickHandler={submitHandler} />
        </>
    );
};

export default UpdateForm;
