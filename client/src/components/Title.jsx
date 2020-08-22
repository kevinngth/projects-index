import React from "react";
import Typography from "@material-ui/core/Typography";

const Title = (props) => {
    return (
        <Typography component="h1" variant="h4" align="center">
            {props.content}
        </Typography>
    );
};

export default Title;
