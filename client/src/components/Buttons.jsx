import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        backgroundColor: "#616773",
        "&:hover": {
            backgroundColor: "#282C34",
        },
        "&:active": {
            backgroundColor: "#A4A9B3",
        },
    },
}));

const Buttons = (props) => {
    const { clickHandler, content, isValid } = props;
    const classes = useStyles();
    return (
        <div className={classes.buttons}>
            <Button
                variant="contained"
                color="primary"
                onClick={clickHandler}
                className={classes.button}
                disabled={!isValid}
            >
                {content}
            </Button>
        </div>
    );
};

export default Buttons;
