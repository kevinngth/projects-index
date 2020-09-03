import axios from "axios";
import { API } from "../config";

const api = axios.create({
    baseURL: API,
});

const getAllStudents = () => api.get(`/students`);
const updateStudentById = (id, payload) => api.put(`/student/${id}`, payload);
const getStudentById = (id) => api.get(`/student/${id}`);

const apis = {
    getAllStudents,
    updateStudentById,
    getStudentById,
};

export default apis;
