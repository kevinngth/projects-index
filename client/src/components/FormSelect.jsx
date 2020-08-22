import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: "100%",
    },
}));

const FormSelect = (props) => {
    const classes = useStyles();
    const { label, changeHandler, values } = props;
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id={label}>{label}</InputLabel>
            <Select
                required
                labelId={label}
                id={label}
                onChange={changeHandler}
                defaultValue={""}
            >
                {values.map((value) => {
                    return (
                        <MenuItem key={value} value={value}>
                            {value}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export default FormSelect;
