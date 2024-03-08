import {createSlice} from "@reduxjs/toolkit";
import {addStudent, deleteStudent, getStudents} from "../../service/studentsService";
const initialState = {
    students: [],
}
const studentsSlice = createSlice({
    name: `students`,
    initialState,
    extraReducers: builder => {
        builder.addCase(getStudents.fulfilled, (state, action) => {
            state.students = action.payload
        });
        builder.addCase(addStudent.fulfilled, (state, action) => {
            state.students.push(action.payload)
        });
        builder.addCase(deleteStudent.fulfilled, (state, action) => {
            state.students = state.students.filter(student => student.id !== action.payload.id);
        });
    }
})
export default studentsSlice.reducer

