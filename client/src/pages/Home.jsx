import React, { useState, useEffect } from "react";
import { BackDrop, ProjectsTable, Title } from "../components";
import api from "../api";
import { BATCH } from "../config";

const Home = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api.getAllStudents()
            .then((response) => {
                setStudents(response.data.data);
            })
            .then(setIsLoading(false));
    }, []);

    return (
        <>
            <Title content={BATCH} />
            <ProjectsTable students={students} />
            <BackDrop open={isLoading} />
        </>
    );
};

export default Home;
