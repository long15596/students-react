import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const getStudents = createAsyncThunk(
    `students/getStudents`,
    async () => {
        const response = await axios.get(`http://localhost:3000/students`)
        return response.data
    }
)
export const addStudent = createAsyncThunk(
    `students/addStudent`,
    async (data) => {
        console.log(data)
        const response = await axios.post(`http://localhost:3000/students`, data)
        return data
    }
)
export const editStudent = createAsyncThunk(
    `students/editStudent`,
    async ({id, values}) => {
        await axios.put(`http://localhost:3000/students/${id}`, values)
        return values
    }
)
export const deleteStudent = createAsyncThunk(
    `students/deleteStudent`,
    async (id) => {
        console.log(id)
        let response = axios.delete(`http://localhost:3000/students/${id}`)
        return (await response).data
    }
)
