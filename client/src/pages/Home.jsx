import React, { useState, useEffect } from "react";
import { BackDrop, ProjectsTable } from "../components";
import api from "../api";

const Home = () => {
    const [students, setStudents] = useState([]);
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

    return (
        <>
            <ProjectsTable students={students} />
            <BackDrop open={isLoading} />
        </>
    );
};

export default Home;
