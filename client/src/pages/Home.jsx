import React, { useState, useEffect } from "react";
import { BackDrop } from "../components";
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
            <p>{!!students.length && students[0].name}</p>
            <BackDrop open={isLoading} />
        </>
    );
};

export default Home;
