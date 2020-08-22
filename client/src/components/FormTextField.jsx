import React from "react";
import TextField from "@material-ui/core/TextField";

const FormTextField = (props) => {
    const { name, changeHandler, value } = props;
    const label = name[0].toUpperCase() + name.slice(1);
    return (
        <TextField
            required
            id={name}
            name={name}
            label={label}
            fullWidth
            onChange={(e) => changeHandler(e, name)}
            value={value && value[name]}
        />
    );
};

export default FormTextField;
