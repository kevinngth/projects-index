import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { BackDrop, Buttons, FormSelect, FormTextField } from "../components";
import api from "../api";

const UpdateForm = () => {
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({});
    const [project, setProject] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        await api.getAllStudents().then((response) => {
            setStudents(response.data.data);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, []);

    const nameChangeHandler = (e) => {
        const { value } = e.target;
        setStudent(students.find((student) => student.name === value));
    };

    const projectChangeHandler = (e) => {
        const { value } = e.target;
        const projectId = value.toLowerCase().split(" ").join("");
        const project = student[projectId];
        setProject(project);
    };

    const editProject = (e, field) => {
        const newProject = { ...project };
        newProject[field] = e.target.value;
        setProject(newProject);
    };

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
                        changeHandler={projectChangeHandler}
                        values={[
                            "Project 1",
                            "Project 2",
                            "Project 3",
                            "Project 4",
                        ]}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormTextField
                        name={"title"}
                        label="Title"
                        changeHandler={editProject}
                        value={project}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="appURL"
                        name="appURL"
                        label="App URL"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="repoURL"
                        name="repoURL"
                        label="Repo URL"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Buttons content={"Submit"} />
        </>
    );
};

export default UpdateForm;
