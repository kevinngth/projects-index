import axios from "axios";
import { API } from "../config";

const api = axios.create({
    baseURL: API,
});

export const getAllStudents = () => api.get(`/students`);
export const updateStudentById = (id, payload) =>
    api.put(`/student/${id}`, payload);
export const getStudentById = (id) => api.get(`/student/${id}`);

const apis = {
    getAllStudents,
    updateStudentById,
    getStudentById,
};

export default apis;
