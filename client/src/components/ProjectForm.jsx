import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const ProjectForm = (props) => {
    const FIELDS = [
        { name: "title", label: "Title", placeholder: "My Project" },
        {
            name: "appURL",
            label: "App URL",
            placeholder: "https://myapp.herokuapp.com",
        },
        {
            name: "repoURL",
            label: "Repo URL",
            placeholder: "https://github.com/me/myapp",
        },
    ];
    const EMPTY_PROJECT = {
        title: "",
        appURL: "",
        repoURL: "",
    };

    const { student, projectId, changeHandler } = props;

    const updateProject = (e, field) => {
        const { value } = e.target;
        project[field] = value;
        changeHandler(project);
    };

    let project = EMPTY_PROJECT;
    if (student[projectId]) {
        project = student[projectId];
    }

    return (
        <>
            {FIELDS.map((field) => {
                const { name, label, placeholder } = field;
                return (
                    <Grid item xs={12} key={label}>
                        <TextField
                            required
                            id={name}
                            name={name}
                            label={label}
                            fullWidth
                            onChange={(e) => updateProject(e, name)}
                            value={project && project[name]}
                            type={name.includes("URL") ? "url" : "text"}
                            placeholder={placeholder}
                        />
                    </Grid>
                );
            })}
        </>
    );
};

export default ProjectForm;
