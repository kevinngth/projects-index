import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { BackDrop, Buttons, FormSelect, FormTextField } from "../components";
import { toVarName } from "../utils";
import api from "../api";

const UpdateForm = () => {
    const PROJECT_LABELS = ["Project 1", "Project 2", "Project 3", "Project 4"];
    const FIELDS = [
        { name: "title", label: "Title" },
        { name: "appURL", label: "App URL" },
        { name: "repoURL", label: "Repo URL" },
    ];
    const EMPTY_PROJECT = {
        title: "",
        appURL: "",
        repoURL: "",
    };

    const [isLoading, setIsLoading] = useState(false);
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({});
    const [projectId, setProjectId] = useState("");
    const [project, setProject] = useState(EMPTY_PROJECT);

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

    const projectChangeHandler = (e) => {
        const { value } = e.target;
        setProjectId(toVarName(value));
        setProject(student[projectId]);
    };

    const editProject = (e, field) => {
        const newProject = { ...project };
        newProject[field] = e.target.value;
        setProject(newProject);
    };

    const submitHandler = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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
                        values={PROJECT_LABELS}
                    />
                </Grid>
                {FIELDS.map((field) => {
                    return (
                        <Grid item xs={12} key={field.label}>
                            <FormTextField
                                name={field.name}
                                label={field.label}
                                changeHandler={editProject}
                                value={project}
                            />
                        </Grid>
                    );
                })}
            </Grid>
            <Buttons content={"Submit"} clickHandler={submitHandler} />
        </>
    );
};

export default UpdateForm;
