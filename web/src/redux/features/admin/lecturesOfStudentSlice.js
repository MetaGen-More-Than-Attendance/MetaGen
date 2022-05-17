import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchLecturesOfStudent = createAsyncThunk('lecturesOfStudent/fetchLecturesOfStudent', (id) => {
    return fetch(`https://meta-gen.herokuapp.com/api/student/${id}/lecture`)
        .then((response) => response.json())
        .then((data) => data);
});

const lecturesOfStudentSlice = createSlice({
    name: 'lecturesOfStudent',
    initialState: {
        entities: [],
        status: 'idle',
    },
    reducers: {
        addLecturesOfStudent(state, action) {
            state.entities.push(action.payload);
        },
    },
    extraReducers: {
        [fetchLecturesOfStudent.pending](state) {
            state.status = 'loading';
        },
        [fetchLecturesOfStudent.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = 'idle';
        },
    },
});

export const { addLecturesOfStudent } = lecturesOfStudentSlice.actions;

export default lecturesOfStudentSlice.reducer;
