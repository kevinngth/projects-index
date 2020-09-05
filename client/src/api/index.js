import axios from "axios";
import { API } from "../config";

const api = axios.create({
    baseURL: API,
});

const getAllStudents = () => api.get(`/students`);
const updateStudentById = (id, payload, passcode) =>
    api.put(`/student/${id}`, payload, {
        headers: {
            passcode,
        },
    });

const apis = {
    getAllStudents,
    updateStudentById,
};

export default apis;
